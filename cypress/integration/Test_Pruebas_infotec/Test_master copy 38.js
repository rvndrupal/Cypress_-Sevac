import test_PO from '../../support/pageObjects/Pruebas/test_PO'
/// <reference types='Cypress' />

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')
import 'cypress-file-upload'


describe('SEVAC', () =>{ 

    const master= new test_PO()
    let numero_pruebas=2
    let tiempo_general=50
    


    //master.visitHome(500)
    
   
    it('PRUEBAS SEVAC', () =>{
        Cypress.config('defaultCommandTimeout', 25000)
        master.Master(tiempo_general,numero_pruebas)
        
    }) 

  


    
});