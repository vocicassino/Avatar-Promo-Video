function genera() {
  const nome = document.getElementById("nome").value;
  const descrizione = document.getElementById("descrizione").value;
  const prezzo = document.getElementById("prezzo").value;
  const target = document.getElementById("target").value;
  const stile = document.getElementById("stile").value;
  const durata = document.getElementById("durata").value;

  if (!nome || !descrizione) {
    alert("Inserisci almeno nome e descrizione del prodotto.");
    return;
  }

  const script = `
Ciao! Oggi voglio presentarti ${nome}.

${descrizione}

È pensato per ${target.toLowerCase()} e può fare davvero la differenza nella vita di tutti i giorni.

Con uno stile ${stile.toLowerCase()}, questo prodotto viene presentato in modo chiaro, diretto e coinvolgente.

${prezzo ? "Il prezzo è di " + prezzo + "." : ""}

Scoprilo ora e lasciati convincere dai suoi vantaggi.
`;

  const slogan = `${nome}: la scelta giusta per chi vuole qualcosa in più.`;

  const facebook = `🔥 Scopri ${nome}!\n\n${descrizione}\n\nUn prodotto pensato per ${target.toLowerCase()}.\n${prezzo ? "Prezzo: " + prezzo : ""}\n\nGuarda il video e scopri di più!`;

  const instagram = `✨ ${nome}\n${descrizione}\n\n#promo #prodotto #offerta #avatarspot`;

  const tiktok = `Hai già visto ${nome}? Un prodotto semplice, utile e perfetto per ${target.toLowerCase()}.`;

  document.getElementById("risultato").innerHTML = `
    <h3>Script video avatar - ${durata}</h3>
    <p>${script.replace(/\n/g, "<br>")}</p>

    <h3>Slogan</h3>
    <p>${slogan}</p>

    <h3>Post Facebook</h3>
    <p>${facebook.replace(/\n/g, "<br>")}</p>

    <h3>Caption Instagram</h3>
    <p>${instagram.replace(/\n/g, "<br>")}</p>

    <h3>Testo TikTok</h3>
    <p>${tiktok}</p>
  `;
}
