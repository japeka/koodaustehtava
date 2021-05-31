/*
    Rapal - Koodaustehtävä
    Tekijä: Janne Kalliokulju
    Pvm: 30.5.2021

    Kuvaus: Toimeksiantona oli toteuttaa selaimessa toimiva puu.
    Rakenteessa piti olla mahdollista lisätä uusia noodeja sekä
    sisentää niitä tietyllä tavalla. Ratkaisussa ei tarvinnut olla
    noodien poistamismahdollisuutta.

    Ratkaisussa otettiin käyttöön JQuery kirjasto, koska se tarjoaa
    hyvän pohjan html domin käsittelyyn. Ohjelman käynnistyessä
    tyhjään selainikkunaan piirretään näkyviin ensimmäinen noodi sekä
    noodin alapuolelle Lisää elementti. Ratkaisussa ei ylläpidetä erillistä
    noodijoukkiota, koska sellaista ei tässä tehtävässä mielestäni tarvittu.
    Toki sellaisen olisi voinut toteuttaa, mutta tässä ratkaisussa hyödynnetään
    sisennyksiä, elementtien data-kenttiä, tyylejä ja tyyliluokkia.
*/

$(document).on("click", "p[class='add']", function() {
    let that = $(this);
    let dataValue = that.attr('data-value');
    let style = that.attr('style'); 
    let prevP = that.prev('p');
    if(prevP.hasClass('add')) {
        var parts = prevP.attr('data-value').split('.');
        if(!parts && !parts.length) return;
        let lastDigit = +parts[parts.length-1];
        lastDigit = ++lastDigit;
        parts[parts.length-1] = lastDigit;
        let newNodeValue = parts.join('.').toString();
        let origParts = dataValue.split('.');
        if(!origParts && !origParts.length) return;
        let left = origParts.length;
        let paddingLeftValue = left + 1;
        $(`
            <p data-value="${newNodeValue}" style="padding-left: ${left}em;">Noodi ${newNodeValue}</p>
            <p class="add" data-value="${newNodeValue}" style="padding-left: ${paddingLeftValue}em;">[Lisää]</p>
        `).insertBefore(that);
    } else {
        let dataValue = prevP.attr('data-value');
        var parts = prevP.attr('data-value').split('.');
        if(!parts && !parts.length) return;
        let sum = parts.length;
        let paddingLeftValue = Number(sum)+1;
        $(`
          <p data-value="${dataValue}.1" style="${style}">Noodi ${dataValue}.1</p>
          <p class="add" data-value="${dataValue}.1" style="padding-left: ${paddingLeftValue}em;">[Lisää]</p>
        `).insertBefore(that);
    }
});
const getData = () => {
 $(document.body).append($(`<p data-value="1">Noodi 1</p>
    <p data-value="1" class="add" style="padding-left: 1em;">[Lisää]</p>
 `));
}
getData();