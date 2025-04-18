function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  
  endpoints.addEndpoint("1", "Temperatura Acumulador ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Temperatura Retorno ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "Temperatura Agua Fría", endpointType.temperatureSensor);
  endpoints.addEndpoint("7", "Temperatura Ambiente", endpointType.temperatureSensor);
  endpoints.addEndpoint("4", "Temperatura Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("5", "Temperatura Acumulador Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("6", "Temperatura Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("8", "Consigna ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("9", "Consigna Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("10", "MP B.Retorno ACS", endpointType.appliance);
  endpoints.addEndpoint("11", "MP B.Caldera", endpointType.appliance);
  endpoints.addEndpoint("12", "MP B.Legionella", endpointType.appliance); 
  endpoints.addEndpoint("13", "MP B.Primario Solar", endpointType.appliance);
  endpoints.addEndpoint("14", "MP B.Primario ACS", endpointType.appliance);
  endpoints.addEndpoint("15", "Alarma exceso temp.Solar", endpointType.appliance);
  endpoints.addEndpoint("16", "Alarma presion caldera baja", endpointType.appliance); 
  endpoints.addEndpoint("17", "Alarma fallo caldera", endpointType.appliance); 
  endpoints.addEndpoint("18", "Alarma fallo termico 1", endpointType.appliance); 
  endpoints.addEndpoint("19", "Alarma fallo termico 2", endpointType.appliance); 
  endpoints.addEndpoint("20", "Alarma control cloro alto", endpointType.appliance); 
  endpoints.addEndpoint("21", "Alarma control cloro bajo", endpointType.appliance); 
  endpoints.addEndpoint("22", "Alarma disparo seta", endpointType.appliance); 

}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
