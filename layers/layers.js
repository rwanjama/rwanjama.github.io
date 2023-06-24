ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32737").setExtent([273667.734894, 9859915.614792, 304366.469418, 9878919.593306]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Parcels_1 = new ol.format.GeoJSON();
var features_Parcels_1 = format_Parcels_1.readFeatures(json_Parcels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_Parcels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcels_1.addFeatures(features_Parcels_1);
var lyr_Parcels_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcels_1, 
                style: style_Parcels_1,
                interactive: true,
                title: '<img src="styles/legend/Parcels_1.png" /> Parcels'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Parcels_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Parcels_1];
lyr_Parcels_1.set('fieldAliases', {'id': 'id', 'Boundary': 'Boundary', 'Rates': 'Rates', 'Proprietor': 'Proprietor', 'Balance': 'Balance', 'Area': 'Area', 'Parcel_No': 'Parcel_No', });
lyr_Parcels_1.set('fieldImages', {'id': '', 'Boundary': '', 'Rates': '', 'Proprietor': '', 'Balance': '', 'Area': '', 'Parcel_No': '', });
lyr_Parcels_1.set('fieldLabels', {'id': 'no label', 'Boundary': 'no label', 'Rates': 'inline label', 'Proprietor': 'header label', 'Balance': 'inline label', 'Area': 'inline label', 'Parcel_No': 'inline label', });
lyr_Parcels_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});