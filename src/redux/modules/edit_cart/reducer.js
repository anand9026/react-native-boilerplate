// Info: Reducer for Edit-Cart Module (Used in POS)
'use strict';

// Shared Dependencies (Managed by Loader)
var Lib = {};

// Exclusive Dependencies
var CONFIG; // (Managed by Main Entry Module & Loader)


/////////////////////////// Module-Loader START ////////////////////////////////

  /********************************************************************
  Load dependencies and configurations

  @param {Set} shared_libs - Reference to libraries already loaded in memory by other modules
  @param {Set} config - Custom configuration in key-value pairs

  @return nothing
  *********************************************************************/
  const loader = function(shared_libs, config){

    // Shared Dependencies (Managed my Main Entry Module)
    Lib = shared_libs;

    // Configuration (Managed my Main Entry Module)
    CONFIG = config;

  };

//////////////////////////// Module-Loader END /////////////////////////////////


//////////////////////////// Module Exports START /////////////////////////////
module.exports = function(shared_libs, config){

  // Run Loader
  loader(shared_libs, config);

  // Export Public Interfaces of this module
  return EditCartReducer;

};//////////////////////////// Module Exports END //////////////////////////////



///////////////////////////Public Functions START///////////////////////////////
const EditCartReducer = function(state = _EditCart.InitialState, action){ // Public functions accessible by other modules

  if(action.type === 'UPDATE_CART'){

    state = {
      ...state,
      cart_deep_data: action.payload.cart_deep_data
    };

  }

  return state;

};///////////////////////////Public Functions END///////////////////////////////



//////////////////////////Private Functions START///////////////////////////////
const _EditCart = { // Private functions accessible within this modules only

  /********************************************************************
  Initial State
  *********************************************************************/
  InitialState: {
  },

};//////////////////////////Private Functions END///////////////////////////////
