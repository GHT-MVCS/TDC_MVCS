// Debug script - ejecutar en la consola del navegador
// Pegar esto en la consola para verificar qué está pasando

function debugBalance() {
  console.log('=== DEBUG BALANCE OTT ===');
  console.log('S.viewData length:', S.viewData ? S.viewData.length : 0);
  
  if (S.viewData && S.viewData.length > 0) {
    console.log('Primeras 5 FECHA E:');
    S.viewData.slice(0, 5).forEach((row, i) => {
      console.log(` Fila ${i}: FECHA E = "${row['FECHA E']}" | OTT = "${row['OTT']}"`)
    });
  }
  
  console.log('\nS.balanceOttPeriodo:', S.balanceOttPeriodo);
  
  const range = getBalanceOttPeriodRange();
  console.log('Rango de período:', range);
  
  if (S.viewData && S.viewData.length > 0) {
    const filtered = S.viewData.filter(row => {
      const fechaStr = String(row['FECHA E'] || '').trim();
      const parts = fechaStr.split('/');
      if (parts.length !== 3) return false;
      const dd = parts[0].padStart(2, '0');
      const mm = parts[1].padStart(2, '0');
      const yyyy = parts[2];
      const fecha = yyyy + mm + dd;
      return fecha >= range.start && fecha <= range.end;
    });
    console.log('Filas filtradas:', filtered.length, 'de', S.viewData.length);
  }
}

// Ejecuta al cargar
debugBalance();
