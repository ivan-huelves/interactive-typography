const int PIR_PIN = 2;

int estadoActual = LOW;
int estadoAnterior = LOW;

void setup() {
  Serial.begin(9600);
  pinMode(PIR_PIN, INPUT);
  
  // Calibración inicial (solo al enchufar)
  delay(2000); 
}

void loop() {
  estadoActual = digitalRead(PIR_PIN);

  // DETECTAR EL FLANCO (El momento exacto que sube)
  if (estadoActual == HIGH && estadoAnterior == LOW) {
    
    Serial.println("1"); 
    
    // --- EL CAMBIO ESTÁ AQUÍ ---
    // Antes esperábamos 2000ms.
    // Ahora ponemos 100ms. Es casi instantáneo para el ojo humano,
    // pero suficiente para filtrar el "ruido" eléctrico.
    delay(100); 
  }

  estadoAnterior = estadoActual;
  
  // Pausa técnica mínima
  delay(10);
}