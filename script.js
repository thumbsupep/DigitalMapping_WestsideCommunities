// JavaScript Document

window.onload = function () {

				//click functions for checkboxes
				$("#education").click(function(){
					filterSectors();
				})
				$("#environment").click(function(){
					filterSectors();
				})
				$("#transportation").click(function(){
					filterSectors();
				})
				$("#health").click(function(){
					filterSectors();
				})
				$("#housing").click(function(){
					filterSectors();
				})
				$("#jobs").click(function(){
					filterSectors();
				})
				$("#leadership").click(function(){
					filterSectors();
				})
				$("#redevelopment").click(function(){ /*changed*/
					filterSectors();
				})
				$("#youthSector").click(function(){
					filterSectors();
				})
				$("#crime").click(function(){
					filterSectors();
				})

				//beneficiaries
				$("#teens").click(function(){
					filterSectors();
				})
				$("#under12").click(function(){
					filterSectors();
				})
				$("#adults").click(function(){
					filterSectors();
				})
				$("#seniors").click(function(){
					filterSectors();
				})

				//click function for radio buttons
				$('#menu input:radio').click(function(e){ //if any of input type radio inside menu is clicked
					if($(e.target).attr('name') == "colorcode") //if the button that called this function is the colorcode button
						$("#colorCode").toggle(); //toggle visibility of legend
					loadCSS();
				});

				function filterSectors(){
					//select all
					//filter down by sector
					sublayer.setSQL("SELECT * FROM " + tableName);
					if($('#sectors input:checked').length != 0)
					{	
						$('#sectors input:checked').each(function(){
							if($(this).attr("id") == "education")//id is education
							{
								if(sublayer.getSQL().indexOf("WHERE") == -1) //returns -1 if WHERE is not in the string
									sublayer.setSQL(sublayer.getSQL() + " WHERE (sector ILIKE '%education%'");
								else
									sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%education%'");
							}
							if($(this).attr("id") == "redevelopment")//changed
							{
								if(sublayer.getSQL().indexOf("WHERE") == -1) //returns -1 if WHERE is not in the string
									sublayer.setSQL(sublayer.getSQL() + " WHERE (sector ILIKE '%redevelopment%'");
								else
									sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%redevelopment%'");
							}
							if($(this).attr("id") == "transportation")
							{
								if(sublayer.getSQL().indexOf("WHERE") == -1) //returns -1 if WHERE is not in the string
									sublayer.setSQL(sublayer.getSQL() + " WHERE (sector ILIKE '%transportation%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%transportation%'");
							}
							if($(this).attr("id") == "environment")
							{
								if(sublayer.getSQL().indexOf("WHERE") == -1) //returns -1 if WHERE is not in the string
									sublayer.setSQL(sublayer.getSQL() + " WHERE (sector ILIKE '%environment%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%environment%'");
							}
							if($(this).attr("id") == "health")
							{
								if(sublayer.getSQL().indexOf("WHERE") == -1) //returns -1 if WHERE is not in the string
									sublayer.setSQL(sublayer.getSQL() + " WHERE (sector ILIKE '%health%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%health%'");
							}
							if($(this).attr("id") == "jobs")
							{
								if(sublayer.getSQL().indexOf("WHERE") == -1) //returns -1 if WHERE is not in the string
									sublayer.setSQL(sublayer.getSQL() + " WHERE (sector ILIKE '%job%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%job%'");
							}
							if($(this).attr("id") == "leadership")
							{
								if(sublayer.getSQL().indexOf("WHERE") == -1) //returns -1 if WHERE is not in the string
									sublayer.setSQL(sublayer.getSQL() + " WHERE (sector ILIKE '%leadership%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%leadership%'");
							}
							
							if($(this).attr("id") == "youthSector")
							{
								if(sublayer.getSQL().indexOf("WHERE") == -1) //returns -1 if WHERE is not in the string
									sublayer.setSQL(sublayer.getSQL() + " WHERE (sector ILIKE '%youth%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%youth%'");
							}
							if($(this).attr("id") == "crime")
							{
								if(sublayer.getSQL().indexOf("WHERE") == -1) //returns -1 if WHERE is not in the string
									sublayer.setSQL(sublayer.getSQL() + " WHERE (sector ILIKE '%crime%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%crime%'");
							}
							if($(this).attr("id") == "housing")
							{
								if(sublayer.getSQL().indexOf("WHERE") == -1) //returns -1 if WHERE is not in the string
									sublayer.setSQL(sublayer.getSQL() + " WHERE (sector ILIKE '%housing%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%housing%'");
							}

						});
						
					}
					else
						sublayer.setSQL("SELECT * FROM " + tableName + " WHERE (1 = 0");

					sublayer.setSQL(sublayer.getSQL() + " OR sector ILIKE '%no%') AND ("); //if no data provided

					if($('#beneficiaries input:checked').length != 0)
					{	
						$('#beneficiaries input:checked').each(function(){
							if($(this).attr("id") == "teens")
							{
								if(sublayer.getSQL().indexOf("(beneficiaries") == -1) //if this is the first one checked
									sublayer.setSQL(sublayer.getSQL() + "beneficiaries ILIKE '%teens%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR beneficiaries ILIKE '%teens%'");
							}
							if($(this).attr("id") == "community") //changed
							{
								if(sublayer.getSQL().indexOf("(beneficiaries") == -1)
									sublayer.setSQL(sublayer.getSQL() + "beneficiaries ILIKE '%community%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR beneficiaries ILIKE '%community%'");
							}
							if($(this).attr("id") == "adults")
							{
								if(sublayer.getSQL().indexOf("(beneficiaries") == -1) 
									sublayer.setSQL(sublayer.getSQL() + "beneficiaries ILIKE '%adults%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR beneficiaries ILIKE '%adults%'");
							}
							if($(this).attr("id") == "under12")
							{
								if(sublayer.getSQL().indexOf("(beneficiaries") == -1) 
									sublayer.setSQL(sublayer.getSQL() + "beneficiaries ILIKE '%under12%'");
								else
								{
								sublayer.setSQL(sublayer.getSQL() + " OR beneficiaries ILIKE '%under12%'");
							console.log("under12")
							}
							}
							if($(this).attr("id") == "seniors")
							{
								if(sublayer.getSQL().indexOf("(beneficiaries") == -1) 
									sublayer.setSQL(sublayer.getSQL() + "beneficiaries ILIKE '%seniors%'");
								else
								sublayer.setSQL(sublayer.getSQL() + " OR beneficiaries ILIKE '%seniors%'");
							}
							

						});
						
					}
					else
						sublayer.setSQL(sublayer.getSQL() + "1 = 0")
					sublayer.setSQL(sublayer.getSQL() + " OR beneficiaries ILIKE '%no%')") //no data provided
					console.log(sublayer.getSQL());
				}//end function

				function loadCSS(){
					//load simple
					cartocssStyle = $('#simple').text();
					if($('#labelOn').is(':checked'))
						cartocssStyle = cartocssStyle + $('#labels').text();
					if($('#bubbleOn').is(':checked'))
						cartocssStyle = cartocssStyle + $('#bubble').text();
					if($('#colorOn').is(':checked')){
						cartocssStyle = cartocssStyle + $('#category').text();
					}
					sublayer.setCartoCSS(cartocssStyle);

				}

				function showInfoPane(data){
					$("#infoPane").css("display","block"); //not working. need to figure out another way to show/hide
					//TODO: use "data" param to populate the info pane
					$("#infoPaneText").multiline(
						data.amount + "\n\n" +
						data.beneficiaries + "\n\n" +
						data.description + "\n\n"
						);
				}
				
				function showTip(data,pos){
					var str = data.beneficiaries;
					$("#toolTip").css("display","block");
					x=event.screenX;
			        y=event.screenY;
			        $("#toolTip").css("left",pos.x + 3);
			        $("#toolTip").css("bottom",$(window).height()-pos.y + 3);
			        $("#org").multiline(
			        	data.org_name);
			        $("#projectTip").multiline( //changed
			        	data.project);
			        
					if(data.amount == 1)
			        {
			        	$("#amt").multiline(
						"$0" + "\n");
			        }
			        else
			        {
					$("#amt").multiline(
						"$" + data.amount.formatMoney(0));
					}
					//end if (data.amount == 1)

					$("#toolTipSector").multiline(
						data.sector);
					if(str.indexOf("under12") > -1)
					{
						str = str.replace("under12","youth under 12");
					}
					if(str.indexOf("teens") > -1)
					{
						str = str.replace("teens","youth 12-17 years");
					}
					$("#toolTipBenif").multiline(
						str);
					$("#toolTipFunder").multiline(data.funder);
					//PassContent();
				}

				function hideTip(data){
					$("#toolTip").css("display","none");
				}
				
					$.fn.multiline = function(text){ //function to create breaklines at the char sequence \n in jquery's .text() method
						this.text(text);
						this.html(this.html().replace(/\n/g,'<br/>'));
					
						return this;
				}

					var tableName = "blank_westside_fund_recipients";
				
					// Put layer data into a JS object
					var layerSource = {
							user_name: 'westsidegrants', 
							type: 'cartodb',
							sublayers: [{ 
								sql: "SELECT * FROM " + tableName, // select all rows ad columns from our table
								cartocss: $("#simple").text() // find the style tag with #bubble above, returns a string of css
							}]
						}
					var layerUrl = 'http://westsidegrants.cartodb.com/api/v2/viz/5c80eeb4-d681-11e4-9e11-0e853d047bba/viz.json'
				
					// Instantiate new map object, place it in 'map' div
					//map options
					var map_object = L.map('map').setView([33.7580385,-84.4118949], 15);

					//create a tile layer sourced from mapbox
					L.tileLayer('https://{s}.tiles.mapbox.com/v4/westsideinvestmentmap.04952d46/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoid2VzdHNpZGVpbnZlc3RtZW50bWFwIiwiYSI6IlVsT3FoOW8ifQ.WLaP_N4kdsbXurwvdci12A').addTo(map_object);
				
					// For storing the sublayer
					var sublayer;
					var layerOptions = {
						legends: true
					};
					// Add data layer to your map
					cartodb.createLayer(map_object,layerUrl) //layerURL as opposed to layerSource for now (see note below)
						.addTo(map_object)
						.on('done',function(layer) {
							sublayer = layer.getSubLayer(0);
							loadCSS();
							sublayer.setInteractivity('project, funder, org_name, cartodb_id, amount, beneficiaries, description, sector, status, address, funding_ends, funding_starts, phone'); //allows for those columns to be manipulated in the infopane, column names match cartodb.com
							sublayer.on('featureClick',function(e,latlng,pos,data){ //note: does not work unless you use layerURL (as opposed to layerSource)
								//showInfoPane(data);
								//handled in cartodb.com
								PassContent(data);
							});
							
							
							sublayer.on('featureOver',function(e,latlng,pos,data){
								showTip(data,pos);
								
								
							});
							sublayer.on('featureOut',function(e,latlng,pos,data){
								hideTip(data);
							});
	
						})
						.error(function(err) {
							console.log("error: " + err);
						});

				} //end onload
		
        Number.prototype.formatMoney = function(c, d, t){
			var n = this, 
			    c = isNaN(c = Math.abs(c)) ? 2 : c, 
			    d = d == undefined ? "." : d, 
			    t = t == undefined ? "," : t, 
			    s = n < 0 ? "-" : "", 
			    i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", 
			    j = (j = i.length) > 3 ? j % 3 : 0;
			   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
			 };   
 
                       
	    function PassContent(data){
							  // var test = document.getElementById('amt').innerHTML;
							  // document.getElementById('SectorLabelText').innerHTML = document.getElementById('sector').innerHTML;
							  // document.getElementById('orgname').innerHTML = document.getElementById('org-name').innerHTML;
							  // document.getElementById('projectName-pass').innerHTML = document.getElementById('project').innerHTML; //changed
							  // document.getElementById('description-pass').innerHTML = document.getElementById('description').innerHTML;
							  // document.getElementById('amountreceived').innerHTML = test;
							  // document.getElementById('participants').innerHTML = document.getElementById('beneficiaries').innerHTML;
							  // document.getElementById('funder-pass').innerHTML = document.getElementById('funder').innerHTML;
							  //Change1To0();
	
							  //setTimeout("PassContent();", 100);
							  var test = document.getElementById('amt').innerHTML;
							  document.getElementById('SectorLabelText').innerHTML = document.getElementById('toolTipSector').innerHTML;
							  document.getElementById('orgname').innerHTML = document.getElementById('org').innerHTML;
							  document.getElementById('projectName-pass').innerHTML = document.getElementById('projectTip').innerHTML; 
							  document.getElementById('description-pass').innerHTML = data.description;
							  document.getElementById('amountreceived').innerHTML = test;
							  document.getElementById('participants').innerHTML = document.getElementById('toolTipBenif').innerHTML;
							  document.getElementById('funder-pass').innerHTML = document.getElementById('toolTipFunder').innerHTML;
								
			
						  }

	
                         
		