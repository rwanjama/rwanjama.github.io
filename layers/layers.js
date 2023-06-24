ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32737").setExtent([292592.807029, 9869737.382534, 296430.148845, 9872112.879848]);
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
var format_projected_boundary_37s_1 = new ol.format.GeoJSON();
var features_projected_boundary_37s_1 = format_projected_boundary_37s_1.readFeatures(json_projected_boundary_37s_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32737'});
var jsonSource_projected_boundary_37s_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projected_boundary_37s_1.addFeatures(features_projected_boundary_37s_1);
var lyr_projected_boundary_37s_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_projected_boundary_37s_1, 
                style: style_projected_boundary_37s_1,
                interactive: true,
                title: '<img src="styles/legend/projected_boundary_37s_1.png" /> projected_boundary_37s'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_projected_boundary_37s_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_projected_boundary_37s_1];
lyr_projected_boundary_37s_1.set('fieldAliases', {'id': 'id', 'Boundary': 'Boundary', 'Rates': 'Rates', 'Proprietor': 'Proprietor', 'Balance': 'Balance', });
lyr_projected_boundary_37s_1.set('fieldImages', {'id': 'TextEdit', 'Boundary': 'TextEdit', 'Rates': 'TextEdit', 'Proprietor': 'TextEdit', 'Balance': 'TextEdit', });
lyr_projected_boundary_37s_1.set('fieldLabels', {'id': 'inline label', 'Boundary': 'no label', 'Rates': 'inline label', 'Proprietor': 'header label', 'Balance': 'inline label', });
lyr_projected_boundary_37s_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});