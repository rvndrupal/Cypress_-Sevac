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
            //let user_Arr = ["01-001_E_001_19","01-002_E_001_19","S016003","01-004_E_001_19","01-005_E_002_19","S016006","01-007_E_001_19"];
            //let user_Arr = ["S016001","S016002","S016003","S016004","S016005","S016006","S016007"];
            let user_Arr = ["S016006","01-002_E_001_19","S016003","01-005_E_002_19","01-011_E_003_19","S026001","02-002_E_002_19","02-003_E_001_19","02-004_E_001_19"];            

            let Random_user = user_Arr[Math.floor(Math.random()*user_Arr.length)]; 
            if(Random_user=="01-002_E_001_19"){
                password="E98847"
            }
            else if(Random_user=="01-005_E_002_19"){
                password="E54395"
            }
            else if(Random_user=="S016003"){
                password="80d67158"
            }
            else if(Random_user=="01-007_E_001_19"){
                password="E64567"
            }
            else if(Random_user=="01-011_E_003_19"){
                password="E14267"
            }
            else if(Random_user=="S016006"){
                password="5fbf88b9"
            }
            else if(Random_user=="S026001"){
                password="c2d26a2c"
            }
            else if(Random_user=="02-002_E_002_19"){
                password="E72147"
            }
            else if(Random_user=="02-003_E_001_19"){
                password="E71799"
            }
            else if(Random_user=="02-004_E_001_19"){
                password="E55178"
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
            cy.xpath("//a[contains(.,'Encuestas')]").should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("//span[contains(.,'En llenado inicial')]").should('be.visible').click({force: true})
            cy.wait(tiempo)
            cy.xpath("(//button[@class='btn btn-danger'][contains(.,'Responder')])[1]").should('be.visible').click({force: true})
            cy.wait(tiempo)

            //encuesta
            for(let i=1;i<=1;i++)
            {

                cy.xpath("(//button[@data-toggle='modal'])["+i+"]").should('be.visible').click({force: true})
                cy.wait(tiempo)
                cy.get(".custom-select").select('A. Cumplimiento alto: 90 <= Cumplimiento <= 100', { force: true })
                cy.wait(tiempo)
                //fecha
                cy.xpath("//input[@id='example-date-input']").should('be.visible').type('2021-12-27')
                cy.wait(tiempo)

                      
               
                //si hay que borrar
                cy.xpath("//button[contains(.,'Borrar archivo')]").should('exist').then(()=>{
                    cy.xpath("//button[contains(.,'Borrar archivo')]").click({force: true})
                
                    let img_Arr = ["Libro_01.pdf","Libro_02.pdf","Libro_03.pdf","Excel_1.xlsx","Excel_2.xlsx","Excel_3.xlsx","CP.xls"];                       
                    //let img_Arr = ["CP.xls"];                       
                    let Random_img = img_Arr[Math.floor(Math.random()*img_Arr.length)]; 
                
                    cy.get('[type="file"]').attachFile(Random_img)
                    cy.wait(100)
                    cy.xpath("//button[contains(.,'Guardar')]").should('be.visible').click({force: true})
                    cy.wait(tiempo)

                }).then(()=>{
                    let img_Arr = ["Libro_01.pdf","Libro_02.pdf","Libro_03.pdf"];            
                    let Random_img = img_Arr[Math.floor(Math.random()*img_Arr.length)]; 
                
                    cy.get('[type="file"]').attachFile(Random_img)
                    cy.wait(100)
                    cy.xpath("//button[contains(.,'Guardar')]").click({force: true})
                    cy.wait(tiempo)
                })
                
            }

               


                
            //salir
            cy.xpath("//span[contains(.,'Cerrar Sesión')]").should('be.visible').click({force: true})
            cy.wait(tiempo)
            
            

            

        }//for

           
       

    }//final bloque master


   



}//final

export default test_PO;