var app = {
	inicio: function() {
		console.log("* Iniciando la aplicación **********");
		this.verificaConexion();
		$("#boton-tipo-conexion").click( function() {
			app.verificaConexion();
		});
		document.addEventListener("offline", onOffline, false);
		document.addEventListener("online", onOnline, false);

		function onOnline() {
			var msg = "Conectando a la red...";
			console.log(msg);
			alert(msg);
			app.verificaConexion();
		}
		function onOffline() {
			var msg = "Perdiste la conexión a la red...";
			console.log(msg);
			alert(msg);
			app.verificaConexion();
		}
	},
	verificaConexion: function() {
		console.log("* Verificando el tipo de conexión...");
		
		var networkType = navigator.connection.type;
		var states = {};
		states[Connection.UNKNOWN] = "Unknown connection";
		states[Connection.ETHERNET] = "Ethernet";
		states[Connection.WIFI] = "WiFi";
		states[Connection.CELL_2G] = "2G";
		states[Connection.CELL_3G] = "3G";
		states[Connection.CELL_4G] = "4G";
		states[Connection.CELL] = "Cell generic";
		states[Connection.NONE] = "No network";
		var mensaje = "Tipo de conexión: " + states[ networkType ];
		console.log(mensaje);
		$("#tipo-conexion").html(mensaje)
	}

};

if ( "addEventListener" in document) {
	document.addEventListener( "DOMContentLoaded", function() {
		app.inicio();
	}, false);
	document.addEventListener( "deviceready", function() {
		app.inicio();
	}, false);
}