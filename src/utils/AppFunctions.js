import HelloWorld from '@/components/HelloWorld';

export default {
  install(Vue) {
    const HelloWorldConstructor = Vue.extend(HelloWorld);
    const instance = new HelloWorldConstructor();
    instance.$mount(document.createElement('div'));

    Vue.prototype.$alert = (msg) => {
      document.body.appendChild(instance.$el);

      // logic
      instance.msg = msg;
      instance.show = true;
    };
  }
};
