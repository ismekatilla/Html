function ilYukle() {
	ilArray = [{"ilKodu":34,"ilAdi":"İstanbul"},{"ilKodu":35,"ilAdi":"İzmir"},{"ilKodu":6,"ilAdi":"Ankara"}];
	$("#il").append("<option></option>");
	for(i=0; i < ilArray.length; i++) {
		ilAsJson = ilArray[i];
		$("#il").append("<option value=\"" + ilAsJson.ilKodu + "\">" + ilAsJson.ilAdi + "</option>");
	}
}

function ilChanged() {
	ilceArray =  [{"ilKodu":34,"ilceKodu":11,"ilceAdi":"Fatih"},{"ilKodu":34,"ilceKodu":12,"ilceAdi":"Çekmeköy"},{"ilKodu":34,"ilceKodu":13,"ilceAdi":"Kadıköy"},{"ilKodu":35,"ilceKodu":1,"ilceAdi":"Karşıyaka"},{"ilKodu":35,"ilceKodu":2,"ilceAdi":"Alsancak"},{"ilKodu":35,"ilceKodu":3,"ilceAdi":"Bornova"},{"ilKodu":6,"ilceKodu":21,"ilceAdi":"Çankaya"},{"ilKodu":6,"ilceKodu":22,"ilceAdi":"Keçiören"},{"ilKodu":6,"ilceKodu":23,"ilceAdi":"Polatlı"}];

	$("#ilce").empty();
	ilKodu = $("#il").val();
	
	ilceArrayByIlKodu = [];
	for(i=0; i < ilceArray.length; i++) {
		ilceAsJson = ilceArray[i];
		if(ilKodu == ilceAsJson.ilKodu) {
			ilceArrayByIlKodu.push(ilceAsJson);
		}
	}
	
	for(i=0; i < ilceArrayByIlKodu.length; i++) {
		ilceAsJson = ilceArrayByIlKodu[i];
		$("#ilce").append("<option value=\"" + ilceAsJson.ilceKodu + "\">" + ilceAsJson.ilceAdi + "</option>");
	}
}

function exportAsJson() {
	
	ilKodu = $("#il").val();
	ilceKodu = $("#ilce").val();
	isim = $("#isim").val();
	cinsiyet = $("[name='cinsiyet']:checked").val();
	
	json =  {"ilKodu":ilKodu,"ilceKodu":ilceKodu,"cinsiyet":cinsiyet,"adi":isim}
	console.log(json);
}