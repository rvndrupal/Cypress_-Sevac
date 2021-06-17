class test_PO{
    

    
    Master(t,np){
        let tiempo=t
        let folios
        //let animales=ani
        let numero_pruebas=np
        for(let num=1;num<=numero_pruebas;num++)
        {
            
            let password=""
            //let user_Arr = ["01-001 AGUASCALIENTES","01-002 ASIENTOS","01-003 CALVILLO","01-004 COSÍO","01-006 PABELLON DE ARTEAGA","01-010 EL LLANO"];
            let user_Arr = ["01-001_E_001_19","01-002_E_001_19","S016003","01-004_E_001_19","01-005_E_002_19","S016006","01-007_E_001_19"];
            let Random_user = user_Arr[Math.floor(Math.random()*user_Arr.length)]; 
            if(Random_user=="01-001_E_001_19"){
                password="E99233"
            }
            else if(Random_user=="01-002_E_001_19"){
                password="E98847"
            }
            else if(Random_user=="S016003"){
                password="80d67158"
            }
            else if(Random_user=="01-004_E_001_19"){
                password="E02362"
            }
            else if(Random_user=="01-005_E_002_19"){
                password="E54395"
            }
            else if(Random_user=="S016006"){
                password="5fbf88b9"
            }
            else if(Random_user=="01-007_E_001_19"){
                password="E64567"
            }

            cy.visit('http://54.145.175.174:8001/login'),
            cy.title().should('eq','SEVAC')
            cy.wait(tiempo)

            
            //Login            
            cy.xpath("//input[@id='inputEmail3']").should('be.visible').type(Random_user)
            cy.wait(tiempo)
            cy.xpath("//input[@id='inputPassword3']").should('be.visible').type(password)
            cy.wait(tiempo)
            cy.xpath("//button[@class='btn btn-default btn-auth'][contains(.,'Iniciar Sesión')]").should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//span[contains(.,'Cerrar Sesión')]").should('be.visible').click({force: true})
            cy.wait(tiempo)
            
            cy.log("Prueba #"+num)

            

        }//for

           
       

    }//final bloque master


   



}//final

export default test_PO;