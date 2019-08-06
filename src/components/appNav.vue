<template>
<div>
  <div class="my8-nav">
    <a href="/"><img class="logo" src="../images/logo-blue.png"/></a>
    <div class="auth-right" v-if="authtype === false">
      <a href="/register"><Button class="auth-button" :style="{'color':'#fff !important'}" type="primary">Register</Button></a>
      <Button class="auth-button" @click="login = true">Log in</Button>
    </div>
    <div class="auth-right" v-else>
      <Dropdown placement="bottom-end" style="margin-left:5px; padding-left: 5px; margin-top:5px; padding-top:43px; border-left:solid 1px #ddd;">
                        <a class="a-h">
                            <span>
                              <Icon type="ios-arrow-down" style="color:#424040; float:right; margin-right:-15px; margin-top:-17px;" />
                            <img style="width:25px; height:25px; border-radius:100%; margin-top:-33px; float:right;" src="../images/default.png" />
                            <span style="margin-right:35px; color:#424040; float:right; margin-top:-30px;">{{curUser.name}}</span>
                        </span>
                    </a>
                    <DropdownMenu slot="list">
                      <!-- <router-link to="/messages" class="a-h"> -->
                            <DropdownItem>Messages</DropdownItem>
                            <DropdownItem>Settings</DropdownItem>
                         <a class="a-h" @click="logout()">
                            <DropdownItem>Log Out</DropdownItem>
                         </a>
                    </DropdownMenu>
                </Dropdown>
    </div>
  </div>
  <Modal v-model="login">
    <div slot="header" style="text-align:left;">
      <Row style="margin-bottom:10px;">
        <h2>Login</h2>
      </Row>
  </div>
    <Form ref="formValidate" :model="formValidate" label-position="top" :rules="ruleValidate">
      <FormItem label="E-mail" prop="mail">
        <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
      </FormItem>
      <FormItem label="Password" prop="password">
        <Input type="password" v-model="formValidate.password" placeholder="Enter your password"></Input>
      </FormItem>
    </Form>
    <div slot="footer" style="text-align:left;">
      <Row style="margin-bottom:10px;">
        <Button size="large" @click="handleSubmit('formValidate')" class="auth-button" type="primary">Login</Button>
      </Row>
  </div>
  </Modal>
</div>
</template>

<script>
import Vue from "vue";
import VueSession from "vue-session";
Vue.use(VueSession);
export default {
  data() {
    return {
      authtype: false,
      curUser: "",
      login: false,
      formValidate: {
        name: "",
        password: ""
      },
      ruleValidate: {
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "The password cannot be empty",
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    if (this.$session.has("usrid")) {
      this.curUser = this.$session.get("usrid");
      this.authtype = true;
    }
  },
  methods: {
    logout: function() {
      this.$session.destroy();
      this.$router.push("/");
      location.reload();
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          this.login = false;
          this.ld("Authenticating Digi.me");
        } else {
          this.$Message.error("Please fill in required fields to continue!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    loading(e) {
      const msg = this.$Message.loading({
        content: e,
        duration: 0
      });
      setTimeout(msg, 3000);
    },
    ld(e) {
      this.loading(e);
      let self = this;
      setTimeout(function() {
        self.$Message.error(
          "Authorisation request denied, Please register to re-authorise"
        );
      }, 3200);
    }
  }
};
</script>
