let util = {

};
util.title = function (title) {
    title = title ? title : 'My8';
    window.document.title = title;
};

export default util;
