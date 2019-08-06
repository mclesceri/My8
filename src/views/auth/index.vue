<style lang="less" scoped>
.index {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;

  h1 {
    height: 150px;

    img {
      height: 100%;
    }
  }

  h2 {
    color: #666;
    margin-bottom: 200px;

    p {
      margin: 0 0 50px;
    }
  }

  .ivu-row-flex {
    height: 100%;
  }
}
</style>
<template>
<div class="index">
  <appNav></appNav>
  <Row type="flex" justify="center" align="middle">
    <Col class="auth-bg-wrapper" :xs="24" :sm="16" :md="16">
    <Col class="auth-image" :xs="24" :sm="12" :md="12">
    </Col>
    <Col class="form-auth" :xs="24" :sm="12" :md="12">
    <Form ref="formValidate" :model="formValidate" label-position="top" :rules="ruleValidate">
    <Row><span class="txt-lead">Welcome</span></Row>
      <FormItem label="Name" prop="name">
        <Input v-model="formValidate.name" placeholder="Enter your name"></Input>
      </FormItem>
      <FormItem label="E-mail" prop="mail">
        <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>
      </FormItem>
      <FormItem label="Password" prop="password">
        <Input type="password" v-model="formValidate.password" placeholder="Enter your password"></Input>
      </FormItem>
      <FormItem label="Age" prop="age">
        <Input v-model="formValidate.age" placeholder="Enter your age"></Input>
      </FormItem>
      <FormItem label="Mobile Number" prop="mobile">
        <Input v-model="formValidate.mobile" placeholder="Enter your mobile number"></Input>
      </FormItem>
      <FormItem>
        <Button style="float:left;" type="primary" :style="{'color':'#fff !important'}" @click="handleSubmit('formValidate')">Register</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
    </Col>
    </Col>
  </Row>
</div>
</template>

<script>
import appNav from "../../components/appNav";
export default {
  components: {
    appNav
  },
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
        password: "",
        age: "",
        mobile: "",
        lastlog: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
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
        ],
        age: [
          {
            required: true,
            message: "The age cannot be empty",
            trigger: "blur"
          }
        ],
        mobile: [
          {
            required: true,
            message: "The mobile number cannot be empty",
            trigger: "blur"
          }
        ]
      }
    };
  },
  beforeCreate: function() {
    if (this.$session.has("usrid")) {
      this.$router.push("/");
    } else {
      this.$router.push("/register");
    }
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          let today = new Date();
          let dd = today.getDate();
          let mm = today.getMonth()+1; //January is 0!
          let yyyy = today.getFullYear();
          if(dd<10) {
            dd = '0'+dd
          }
          if(mm<10) {
            mm = '0'+mm
          }
          today = mm + '/' + dd + '/' + yyyy;
          this.formValidate.lastlog = today;
          this.$session.set("usrid", this.formValidate);
          this.$router.push("/");
        } else {
          this.$Message.error("Please fill in required fields to continue!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
