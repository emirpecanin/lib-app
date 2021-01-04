define("authors/config/environment", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var config;

  try {
    var metaName = 'authors/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  var _default = config;
  _exports.default = _default;
});
define("authors/controllers/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _dec2, _dec3, _dec4, _class;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  let AuthorsController = (_dec = Ember._action, _dec2 = Ember._action, _dec3 = Ember._action, _dec4 = Ember._action, (_class = class AuthorsController extends Ember.Controller {
    removeAuthor(author) {
      author.destroyRecord();
    }

    toggleEditing(author) {
      author.isEditing = !author.isEditing;
    }

    saveChanges(author) {
      author.save().then(() => {
        this.toggleEditing(author);
      });
    }

    rejectChanges(author) {
      if (author.hasDirtyAttributes) {
        author.rollbackAttributes();
      }

      this.toggleEditing(author);
    }

  }, (_applyDecoratedDescriptor(_class.prototype, "removeAuthor", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "removeAuthor"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleEditing", [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, "toggleEditing"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "saveChanges", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "saveChanges"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "rejectChanges", [_dec4], Object.getOwnPropertyDescriptor(_class.prototype, "rejectChanges"), _class.prototype)), _class));
  _exports.default = AuthorsController;
});
define("authors/engine", ["exports", "ember-engines/engine", "ember-load-initializers", "authors/resolver", "authors/config/environment"], function (_exports, _engine, _emberLoadInitializers, _resolver, _environment) {
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
define("authors/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
define("authors/routes/application", ["exports"], function (_exports) {
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

  let AuthorsRoute = (_dec = Ember.inject.service, (_class = (_temp = class AuthorsRoute extends Ember.Route {
    constructor(...args) {
      super(...args);

      _initializerDefineProperty(this, "store", _descriptor, this);
    }

    model() {
      return this.store.findAll('author');
    }

  }, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "store", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = AuthorsRoute;
});
define("authors/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "7hD8B1p8",
    "block": "{\"symbols\":[\"author\",\"@model\"],\"statements\":[[6,[37,2],[[32,2]],null,[[\"default\",\"else\"],[{\"statements\":[[10,\"div\"],[14,0,\"my-8\"],[12],[2,\"\\n  \"],[10,\"table\"],[14,0,\"min-w-full table-auto\"],[12],[2,\"\\n    \"],[10,\"thead\"],[14,0,\"justify-between\"],[12],[2,\"\\n      \"],[10,\"tr\"],[14,0,\"bg-gray-800\"],[12],[2,\"\\n        \"],[10,\"th\"],[14,0,\"px-20 py-2\"],[12],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text-gray-300\"],[12],[2,\"Name\"],[13],[2,\" \"],[10,\"br\"],[12],[13],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text-gray-400 font-normal text-xs\"],[12],[2,\"(Click to edit)\"],[13],[2,\"\\n        \"],[13],[2,\"\\n        \"],[10,\"th\"],[14,0,\"px-4 py-2\"],[12],[2,\"\\n          \"],[10,\"span\"],[14,0,\"text-gray-300\"],[12],[2,\"Delete\"],[13],[2,\"\\n        \"],[13],[2,\"\\n     \\n      \"],[13],[2,\"\\n    \"],[13],[2,\"\\n\\n    \"],[10,\"tbody\"],[14,0,\"bg-gray-200\"],[12],[2,\"\\n\\n\"],[6,[37,4],[[30,[36,3],[[30,[36,3],[[32,2]],null]],null]],null,[[\"default\"],[{\"statements\":[[2,\"        \"],[10,\"tr\"],[14,0,\"bg-white border-4 text-center border-gray-200\"],[12],[2,\"\\n\"],[6,[37,2],[[32,1,[\"isEditing\"]]],null,[[\"default\",\"else\"],[{\"statements\":[[2,\"            \"],[10,\"td\"],[14,0,\"flex justify-center \"],[12],[2,\"\\n              \"],[10,\"form\"],[14,0,\"flex items-center bg-white\"],[12],[2,\"\\n                \"],[8,\"input\",[[24,0,\"leading-8 px-4 pl-8 h-12 \"]],[[\"@value\"],[[32,1,[\"name\"]]]],null],[2,\"\\n                \"],[11,\"button\"],[24,0,\"bg-green-600 text-white px-4 py-2 rounded  hover:bg-green-400\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"saveChanges\"]],[32,1]],null]],null],[12],[2,\"\\n                  Accept\\n                \"],[13],[2,\"\\n                \"],[11,\"button\"],[24,0,\"bg-red-600 text-white ml-2 px-4 py-2 rounded  hover:bg-red-400\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"rejectChanges\"]],[32,1]],null]],null],[12],[2,\" \\n                  Cancel\\n                \"],[13],[2,\"\\n              \"],[13],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"            \"],[10,\"td\"],[12],[2,\"\\n              \"],[11,\"span\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"toggleEditing\"]],[32,1]],null]],null],[12],[2,\" \"],[1,[32,1,[\"name\"]]],[2,\" \"],[13],[2,\"\\n            \"],[13],[2,\"\\n\"]],\"parameters\":[]}]]],[2,\"          \"],[10,\"td\"],[12],[2,\"\\n            \"],[11,\"button\"],[24,0,\"bg-red-600 text-white px-6 py-2 my-2 rounded outline-none hover:bg-red-400\"],[24,4,\"button\"],[4,[38,1],[\"click\",[30,[36,0],[[32,0,[\"removeAuthor\"]],[32,1]],null]],null],[12],[2,\"Remove\"],[13],[2,\"\\n          \"],[13],[2,\"\\n        \"],[13],[2,\"\\n\"]],\"parameters\":[1]}]]],[2,\"    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\"],[13],[2,\"\\n\"]],\"parameters\":[]},{\"statements\":[[2,\"\\n  \"],[10,\"div\"],[14,0,\"bg-red-300 border-red-800 text-red-800 border-t-4 rounded  px-4 py-3 shadow-md my-2\"],[14,\"role\",\"alert\"],[12],[2,\"\\n    \"],[10,\"div\"],[14,0,\"flex align-items justify-center\"],[12],[2,\"\\n      \"],[10,\"div\"],[14,0,\"font-bold block text-center\"],[12],[2,\"No authors in database\"],[13],[2,\"\\n    \"],[13],[2,\"\\n  \"],[13],[2,\"\\n\\n\"]],\"parameters\":[]}]]]],\"hasEval\":false,\"upvars\":[\"fn\",\"on\",\"if\",\"-track-array\",\"each\"]}",
    "meta": {
      "moduleName": "authors/templates/application.hbs"
    }
  });

  _exports.default = _default;
});//# sourceMappingURL=engine.map
