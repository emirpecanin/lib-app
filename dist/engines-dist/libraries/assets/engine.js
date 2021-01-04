define("libraries/components/alert", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="bg-{{@color}}-300 border-{{@color}}-800 text-{{@color}}-800 border-t-4 rounded  px-4 py-3 shadow-md my-2" role="alert">
    <div class="flex align-items justify-center">
      <div class="font-bold block text-center">{{yield}}</div>
    </div>
  </div>
  
  */
  {
    "id": "ERb9YVzj",
    "block": "{\"symbols\":[\"@color\",\"&default\"],\"statements\":[[10,\"div\"],[15,0,[31,[\"bg-\",[32,1],\"-300 border-\",[32,1],\"-800 text-\",[32,1],\"-800 border-t-4 rounded  px-4 py-3 shadow-md my-2\"]]],[14,\"role\",\"alert\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"flex align-items justify-center\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"font-bold block text-center\"],[12],[18,2,null],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "libraries/components/alert.hbs"
    }
  });

  class AlertComponent extends _component.default {}

  _exports.default = AlertComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, AlertComponent);
});
define("libraries/components/library-container/footer", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex  bg-gray-50 px-4 shadow-md ">
      {{#if @library.books.length}}
        <LinkTo 
          @route="has"
          @model={{@library}}
          class="px-4 py-2 my-2 text-white rounded bg-green-600 hover:bg-green-400"
          type="button">
          Books
        </LinkTo>
      {{/if}}
  
      <LinkTo 
        @route="edit"
        @model={{@library}}
        class="px-4 py-2 my-2 ml-4 text-white rounded bg-blue-600 hover:bg-blue-400"
        type="button">
        Edit Library
      </LinkTo>
  
      <button class="ml-auto px-4 py-2 my-2 text-white rounded bg-red-600 hover:bg-red-400"
        {{on 'click' (fn @destroyRecord @library)}}
        type="button">
        Delete
      </button>
    </div>
  
  */
  {
    "id": "W5/IWYHl",
    "block": "{\"symbols\":[\"@library\",\"@destroyRecord\"],\"statements\":[[10,\"div\"],[14,0,\"flex  bg-gray-50 px-4 shadow-md \"],[12],[2,\"\\n\"],[6,[37,0],[[32,1,[\"books\",\"length\"]]],null,[[\"default\"],[{\"statements\":[[2,\"      \"],[8,\"link-to\",[[24,0,\"px-4 py-2 my-2 text-white rounded bg-green-600 hover:bg-green-400\"],[24,4,\"button\"]],[[\"@route\",\"@model\"],[\"has\",[32,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n        Books\\n      \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"\\n    \"],[8,\"link-to\",[[24,0,\"px-4 py-2 my-2 ml-4 text-white rounded bg-blue-600 hover:bg-blue-400\"],[24,4,\"button\"]],[[\"@route\",\"@model\"],[\"edit\",[32,1]]],[[\"default\"],[{\"statements\":[[2,\"\\n      Edit Library\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\\n    \"],[11,\"button\"],[24,0,\"ml-auto px-4 py-2 my-2 text-white rounded bg-red-600 hover:bg-red-400\"],[24,4,\"button\"],[4,[38,2],[\"click\",[30,[36,1],[[32,2],[32,1]],null]],null],[12],[2,\"\\n      Delete\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"]],\"hasEval\":false,\"upvars\":[\"if\",\"fn\",\"on\"]}",
    "meta": {
      "moduleName": "libraries/components/library-container/footer.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
define("libraries/components/library-container/header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  <div class="flex p-2 shadow-sm items-center bg-gray-50"> 
    <span class="block text-gray-400 text-sm">
      Name:
    </span>
    <div class="text-center mx-auto font-bold">
      {{@name}}
    </div>
    {{#if @length}}
      <div class="block w-8 h-8 bg-red-800 rounded-full text-white text-sm leading-8 font-bold text-center">{{@length}}</div>
    {{/if}}
  </div>
  */
  {
    "id": "8otwd5nM",
    "block": "{\"symbols\":[\"@length\",\"@name\"],\"statements\":[[2,\"\\n\"],[10,\"div\"],[14,0,\"flex p-2 shadow-sm items-center bg-gray-50\"],[12],[2,\" \\n  \"],[10,\"span\"],[14,0,\"block text-gray-400 text-sm\"],[12],[2,\"\\n    Name:\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"text-center mx-auto font-bold\"],[12],[2,\"\\n    \"],[1,[32,2]],[2,\"\\n  \"],[13],[2,\"\\n\"],[6,[37,0],[[32,1]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[10,\"div\"],[14,0,\"block w-8 h-8 bg-red-800 rounded-full text-white text-sm leading-8 font-bold text-center\"],[12],[1,[32,1]],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[13]],\"hasEval\":false,\"upvars\":[\"if\"]}",
    "meta": {
      "moduleName": "libraries/components/library-container/header.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
define("libraries/components/library-container/index", ["exports", "@glimmer/component"], function (_exports, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex flex-col bg-white col-span-1 rounded-t shadow-md">
  
    <LibraryContainer::Header @name={{@library.name}} @length={{@library.books.length}}/>
  
    <LibraryContainer::Info @info={{@library}}/>
  
    <LibraryContainer::Footer @library={{@library}} @destroyRecord={{this.deleteLibrary}}/>  
    
  </div>
  */
  {
    "id": "kdewIhpX",
    "block": "{\"symbols\":[\"@library\"],\"statements\":[[10,\"div\"],[14,0,\"flex flex-col bg-white col-span-1 rounded-t shadow-md\"],[12],[2,\"\\n\\n  \"],[8,\"library-container/header\",[],[[\"@name\",\"@length\"],[[32,1,[\"name\"]],[32,1,[\"books\",\"length\"]]]],null],[2,\"\\n\\n  \"],[8,\"library-container/info\",[],[[\"@info\"],[[32,1]]],null],[2,\"\\n\\n  \"],[8,\"library-container/footer\",[],[[\"@library\",\"@destroyRecord\"],[[32,1],[32,0,[\"deleteLibrary\"]]]],null],[2,\"  \\n  \\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "libraries/components/library-container/index.hbs"
    }
  });

  let LibraryContainerComponent = (_dec = Ember.inject.service, _dec2 = Ember._action, (_class = (_temp = class LibraryContainerComponent extends _component.default {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    async deleteLibrary(library) {
      let confirmation = confirm('Are you sure you want to delete a gallery? Removing a library will remove all books library had.');

      if (confirmation) {
        let libId = library.id;
        this.store.findAll('book', {
          filter: {
            library: libId
          }
        }).then(books => {
          books.forEach(book => book.destroyRecord());
        });
        library.destroyRecord();
      }
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "deleteLibrary", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "deleteLibrary"), _class.prototype)), _class));
  _exports.default = LibraryContainerComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, LibraryContainerComponent);
});
define("libraries/components/library-container/info", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="flex flex-col shadow-md flex-1">
    <div class="flex w-full space-x-4 p-2">
      <span class="text-gray-400 text-sm">Adress</span>
      <span>{{@info.address}}</span>
    </div>
    <div class="flex w-full space-x-4 p-2">
      <span class="text-gray-400 text-sm">Phone</span>
      <span>{{@info.phoneNumber}}</span>
    </div>
    <div class="flex w-full space-x-4 p-2">
      <span class="text-gray-400 text-sm">Additional info</span>
      <span>{{@info.additional}}</span>
    </div>
  </div>
  */
  {
    "id": "XIMNPXdm",
    "block": "{\"symbols\":[\"@info\"],\"statements\":[[10,\"div\"],[14,0,\"flex flex-col shadow-md flex-1\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"flex w-full space-x-4 p-2\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"text-gray-400 text-sm\"],[12],[2,\"Adress\"],[13],[2,\"\\n    \"],[10,\"span\"],[12],[1,[32,1,[\"address\"]]],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"flex w-full space-x-4 p-2\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"text-gray-400 text-sm\"],[12],[2,\"Phone\"],[13],[2,\"\\n    \"],[10,\"span\"],[12],[1,[32,1,[\"phoneNumber\"]]],[13],[2,\"\\n  \"],[13],[2,\"\\n  \"],[10,\"div\"],[14,0,\"flex w-full space-x-4 p-2\"],[12],[2,\"\\n    \"],[10,\"span\"],[14,0,\"text-gray-400 text-sm\"],[12],[2,\"Additional info\"],[13],[2,\"\\n    \"],[10,\"span\"],[12],[1,[32,1,[\"additional\"]]],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[]}",
    "meta": {
      "moduleName": "libraries/components/library-container/info.hbs"
    }
  });

  var _default = Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Ember._templateOnlyComponent());

  _exports.default = _default;
});
define("libraries/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'libraries/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define("libraries/controllers/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let LibrariesEditController = (_dec = Ember._action, (_class = class LibrariesEditController extends Ember.Controller {
    saveChanges() {
      let library = this.model;
      library.save().then(() => {
        this.transitionToRoute('show');
      });
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "saveChanges", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "saveChanges"), _class.prototype)), _class));
  _exports.default = LibrariesEditController;
});
define("libraries/controllers/new", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let LibrariesNewController = (_dec = Ember.inject.service, _dec2 = Ember._tracked, _dec3 = Ember._tracked, _dec4 = Ember._tracked, _dec5 = Ember._tracked, _dec6 = Ember._action, (_class = (_temp = class LibrariesNewController extends Ember.Controller {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);

      _initializerDefineProperty(this, "name", _descriptor2, this);

      _initializerDefineProperty(this, "address", _descriptor3, this);

      _initializerDefineProperty(this, "phoneNumber", _descriptor4, this);

      _initializerDefineProperty(this, "additionalInfo", _descriptor5, this);
    }

    get isDisabled() {
      return !(this.name && this.address && this.phoneNumber);
    }

    addLibrary() {
      this.store.createRecord('library', {
        name: this.name,
        address: this.address,
        phoneNumber: this.phoneNumber,
        additional: this.additionalInfo
      }).save().then(() => {
        this.name = '';
        this.address = '';
        this.phoneNumber = '';
        this.additionalInfo = '';
        this.transitionToRoute('show');
      });
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "name", [_dec2], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "address", [_dec3], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "phoneNumber", [_dec4], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "additionalInfo", [_dec5], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return '';
    }
  }), _applyDecoratedDescriptor(_class.prototype, "addLibrary", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "addLibrary"), _class.prototype)), _class));
  _exports.default = LibrariesNewController;
});
define("libraries/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "libraries/resolver", "libraries/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    modulePrefix
  } = _environment.default;

  const Eng = _engine.default.extend({
    modulePrefix,
    Resolver: _resolver.default,
    dependencies: {
      services: ['store']
    }
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);
  var _default = Eng;
  _exports.default = _default;
});
define("libraries/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define("libraries/routes/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let LibrariesEditRoute = (_dec = Ember._action, (_class = class LibrariesEditRoute extends Ember.Route {
    willTransition(transition) {
      let library = this.controller.model;

      if (library.hasDirtyAttributes) {
        const confirmation = confirm('Changes to your library are not saved. Are you sure you want to navigate away from this page?');

        if (confirmation) {
          library.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "willTransition", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "willTransition"), _class.prototype)), _class));
  _exports.default = LibrariesEditRoute;
});
define("libraries/routes/has", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class LibrariesHasRoute extends Ember.Route {}

  _exports.default = LibrariesHasRoute;
});
define("libraries/routes/new", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class LibrariesNewRoute extends Ember.Route {}

  _exports.default = LibrariesNewRoute;
});
define("libraries/routes/show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  let LibrariesShowRoute = (_dec = Ember.inject.service, (_class = (_temp = class LibrariesShowRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    model() {
      return this.store.findAll('library');
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = LibrariesShowRoute;
});
define("libraries/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TAUAP53j",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"bg-white rounded-b-lg w-full h-12 shadow-lg\"],[12],[2,\"\\n  \"],[10,\"div\"],[14,0,\"flex items-center pl-4 leading-8 h-12 space-x-2\"],[12],[2,\"\\n    \"],[8,\"link-to\",[[24,0,\"subnav block px-4 rounded hover:bg-gray-800 hover:text-white\"]],[[\"@route\"],[\"show\"]],[[\"default\"],[{\"statements\":[[2,\" \\n      Show all\\n    \"]],\"parameters\":[]}]]],[2,\"\\n\\n    \"],[8,\"link-to\",[[24,0,\"subnav block px-4 rounded hover:bg-gray-800 hover:text-white\"]],[[\"@route\"],[\"new\"]],[[\"default\"],[{\"statements\":[[2,\"\\n      Add new\\n    \"]],\"parameters\":[]}]]],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"],[1,[30,[36,1],[[30,[36,0],null,null]],null]]],\"hasEval\":false,\"upvars\":[\"-outlet\",\"component\"]}",
    "meta": {
      "moduleName": "libraries/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
define("libraries/templates/edit", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "4b6zfFbh",
    "block": "{\"symbols\":[\"@model\"],\"statements\":[[10,\"div\"],[14,0,\"flex justify-center\"],[12],[2,\"\\n  \"],[10,\"form\"],[14,0,\"form bg-white p-6 my-10 relative w-1/3 sm:w-2/4\"],[12],[2,\"  \\n    \"],[10,\"h3\"],[14,0,\"text-2xl text-gray-900 font-semibold\"],[12],[2,\"Edit library information\"],[13],[2,\"\\n\\n    \"],[8,\"input\",[[24,\"placeholder\",\"Library name\"],[24,0,\"border p-2 w-full mt-3\"],[24,4,\"text\"]],[[\"@value\"],[[32,1,[\"name\"]]]],null],[2,\"\\n\\n    \"],[8,\"input\",[[24,\"placeholder\",\"Library adress\"],[24,0,\"border p-2 w-full mt-3\"],[24,4,\"text\"]],[[\"@value\"],[[32,1,[\"address\"]]]],null],[2,\"\\n\\n    \"],[8,\"input\",[[24,\"placeholder\",\"Telephone number\"],[24,0,\"border p-2 w-full mt-3\"],[24,4,\"text\"]],[[\"@value\"],[[32,1,[\"phoneNumber\"]]]],null],[2,\"\\n\\n    \"],[8,\"textarea\",[[24,\"cols\",\"10\"],[24,\"rows\",\"3\"],[24,\"placeholder\",\"Additional info (optional)\"],[24,0,\"border p-2 mt-3 w-full\"]],[[\"@value\"],[[32,1,[\"additional\"]]]],null],[2,\"\\n    \"],[11,\"button\"],[24,0,\"w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3\"],[24,4,\"button\"],[4,[38,0],[\"click\",[32,0,[\"saveChanges\"]]],null],[12],[2,\"\\n      Save changes\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"on\"]}",
    "meta": {
      "moduleName": "libraries/templates/edit.hbs"
    }
  });

  _exports.default = _default;
});
define("libraries/templates/has", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MAapOLqr",
    "block": "{\"symbols\":[\"book\",\"@model\"],\"statements\":[[10,\"div\"],[14,0,\"bg-white mt-8\"],[12],[2,\"\\n  \"],[10,\"table\"],[14,0,\"table-auto border-collapse w-full\"],[12],[2,\"\\n    \"],[10,\"thead\"],[12],[2,\"\\n      \"],[10,\"tr\"],[14,0,\"rounded-lg text-sm font-medium text-gray-700 text-left\"],[14,5,\"font-size: 0.9674rem\"],[12],[2,\"\\n        \"],[10,\"th\"],[14,0,\"px-4 py-2 bg-gray-200 \"],[14,5,\"background-color:#f8f8f8\"],[12],[2,\"Title\"],[13],[2,\"\\n        \"],[10,\"th\"],[14,0,\"px-4 py-2 \"],[14,5,\"background-color:#f8f8f8\"],[12],[2,\"ISDN\"],[13],[2,\"\\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n    \"],[10,\"tbody\"],[14,0,\"text-sm font-normal text-gray-700\"],[12],[2,\"\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,2,[\"books\"]]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[14,0,\"hover:bg-gray-100 border-b border-gray-200 py-10\"],[12],[2,\"\\n          \"],[10,\"td\"],[14,0,\"px-4 py-4\"],[12],[1,[32,1,[\"name\"]]],[13],[2,\"\\n          \"],[10,\"td\"],[14,0,\"px-4 py-4\"],[12],[1,[32,1,[\"ISDN\"]]],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "libraries/templates/has.hbs"
    }
  });

  _exports.default = _default;
});
define("libraries/templates/new", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Lx1e+jsI",
    "block": "{\"symbols\":[],\"statements\":[[10,\"div\"],[14,0,\"flex justify-center\"],[12],[2,\"\\n  \"],[10,\"form\"],[14,0,\"form bg-white p-6 my-10 relative w-1/3 sm:w-2/4\"],[12],[2,\"  \\n    \"],[10,\"h3\"],[14,0,\"text-2xl text-gray-900 font-semibold\"],[12],[2,\"Add new library\"],[13],[2,\"\\n    \"],[10,\"p\"],[14,0,\"text-gray-600\"],[12],[2,\" Please input requested information \"],[13],[2,\"\\n\\n    \"],[8,\"input\",[[24,\"placeholder\",\"Library name\"],[24,0,\"border p-2 w-full mt-3\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"name\"]]]],null],[2,\"\\n\\n    \"],[8,\"input\",[[24,\"placeholder\",\"Library adress\"],[24,0,\"border p-2 w-full mt-3\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"address\"]]]],null],[2,\"\\n\\n    \"],[8,\"input\",[[24,\"placeholder\",\"Telephone number\"],[24,0,\"border p-2 w-full mt-3\"],[24,4,\"text\"]],[[\"@value\"],[[32,0,[\"phoneNumber\"]]]],null],[2,\"\\n\\n    \"],[8,\"textarea\",[[24,\"cols\",\"10\"],[24,\"rows\",\"3\"],[24,\"placeholder\",\"Additional info (optional)\"],[24,0,\"border p-2 mt-3 w-full\"]],[[\"@value\"],[[32,0,[\"additionalInfo\"]]]],null],[2,\"\\n    \"],[11,\"button\"],[16,\"disabled\",[32,0,[\"isDisabled\"]]],[16,0,[31,[[30,[36,0],[[32,0,[\"isDisabled\"]],\"disabled\"],null],\" w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3\"]]],[24,4,\"button\"],[4,[38,1],[\"click\",[32,0,[\"addLibrary\"]]],null],[12],[2,\"\\n      Add new Library\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13]],\"hasEval\":false,\"upvars\":[\"if\",\"on\"]}",
    "meta": {
      "moduleName": "libraries/templates/new.hbs"
    }
  });

  _exports.default = _default;
});
define("libraries/templates/show", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "TBY3hLKU",
    "block": "{\"symbols\":[\"library\",\"@model\"],\"statements\":[[6,[37,2],[[32,2]],null,[[\"default\",\"else\"],[{\"statements\":[[10,\"div\"],[14,0,\"container pt-4 grid grid-cols-3 gap-4\"],[12],[2,\"\\n\\n\"],[6,[37,1],[[30,[36,0],[[30,[36,0],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"    \"],[8,\"library-container\",[],[[\"@library\"],[[32,1]]],null],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"\\n\"],[13],[2,\"\\n\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"  \"],[8,\"alert\",[],[[\"@color\"],[\"red\"]],[[\"default\"],[{\"statements\":[[2,\"\\n    No libraries in database\\n  \"]],\"parameters\":[]}]]],[2,\"\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"-track-array\",\"each\",\"if\"]}",
    "meta": {
      "moduleName": "libraries/templates/show.hbs"
    }
  });

  _exports.default = _default;
});//# sourceMappingURL=engine.map
