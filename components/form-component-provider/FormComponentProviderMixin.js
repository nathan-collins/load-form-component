import CachedTask from '../cached-task/CachedTask.js';

const FormComponentProvider = (Base) => class extends Base {
  _instance = new Map();
  
  constructor() {
    super();
  }

  providerFormComponent(key, instance) {
    
  }
}
