// Client-side scripts:

	APP = new function() {
	
		var self = this;

		self.helloMauget = function () {
			alert('Hello');
		};

		self.nearZip = function() {
		    
			$.getJSON("/near/zip/27526", function(data) {
				//console.log(JSON.stringify(data));
				
				$('#nearList').html('');
				$.each(data, function(index, val) {
					//console.log('%s. %s, %s %s (%s,%s)', index, val.city, val.state, val.zip, val.loc.y, val.loc.x);
					var row = self.createRow(index, val);
					$(row).appendTo('#nearList');
					console.log(row);
				});
			});
		};

		self.citiesVarina = function() {
			
			$.getJSON("/cities/varina", function(data) {
				$('#nearList').html('');	
				$.each(data, function(index, val) {
					var row = self.createRow(index, val);
					$(row).appendTo('#nearList');
					console.log(row);
				});
			});
		};
		
		self.createRow = function(index, val) {
			
			var row = '<div class="ui-block-a">%s0&nbsp;%s1</div><div class="ui-block-b">%s2&nbsp;&nbsp;%s3</div>';
			row = replace('%s0', Number(index) + 1)
				.replace('%s1', val.city)
				.replace('%s2', val.state)
				.replace('%s3', val.zip);
			return row;
		};

		self.nearLatLon = function() {
			
			$.getJSON("/near/lat/35.579952/lon/78.790807", function(data) {
				$('#nearList').html('');	
				$.each(data, function(index, val) {
					var row = self.createRow(index, val);
					$(row).appendTo('#nearList');
					console.log(row);
				});
			});
		};

	};
