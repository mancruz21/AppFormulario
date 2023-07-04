import React from "react";
import {View, Text, Button} from "react-native"

export default function Formulario1(props){

    const {navigation} = props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName);
    }
    return (
        <View>
            <Text>CUESTIONARIO PARA LA CARACTERIZACIÓN DE NECESIDADES DE REHABILITACIÓN EN SALUD</Text>


            <Text>Observaciones:  La encuesta puede ser respondida por máximo 3 integrantes del hogar, que incluyen:</Text>
            <Text>Personas de 10 años o más (≥10 años) que residan de manera permanente en el municipio, es decir, por un tiempo mayor o igual a 6 meses (≥ 6 meses)
                * Para el caso de las personas menores de 18 años edad (18 años), el suministro de la información se realizará a través del acompañamiento de los padres o de la
                 persona del hogar que esté a cargo de su cuidado.
                 *Para el caso de las personas que no tengan la capacidad de responder por sí mismas, la información será suministrada por un adulto del hogar o por parte de un cuidador
                  con tiempo de servicio/ acompañamiento mayor o igual a seis meses (≥ 6 meses oooo).
 
            </Text>
            <Button onPress={() => goToPage("Seccion")} title="Siguiente" />
            
        </View>

        
    )
}

