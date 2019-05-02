import { observe } from 'observer/index';
import { hack } from 'emit'
function mapKeys(source, target, map) {
  Object.keys(map).forEach(function (key) {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function PageComponent(PageOptions) {
  if (PageOptions === void 0) {
    PageOptions = {};
  }

  var options = {};
  mapKeys(PageOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses'
  });
  var _PageOptions = PageOptions,
    relation = _PageOptions.relation;

  if (relation) {
    options.relations = Object.assign(options.relations || {}, {
      ["../" + relation.name + "/index"]: relation
    });
  } // add default externalClasses


  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class'); // add default behaviors

  options.behaviors = options.behaviors || [];
  options.behaviors.push(hack);
  if (PageOptions.field) {
    options.behaviors.push('wx://form-field');
  } // add default options


  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };
  observe(PageOptions, options);
  Component(options);
}

export { PageComponent };