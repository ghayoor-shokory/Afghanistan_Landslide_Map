window.onload = init;
function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: ol.proj.fromLonLat([64.91 , 32.30]),
            zoom: 5.9
        }),
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        target:'map'
    })
    var afghanistan = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'https://geonode.wfp.org/geoserver/ows?SERVICE=WMS&',
            params: {
                LAYERS: 'afg_bnd_admin2_cso',
            }
        })
    });
    var afghanistan_glacier = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://webmap.iwmi.org/arcgis/services/Kabul/KabulRiverBasin/MapServer/WmsServer?',
            params: {
                LAYERS: '136',
            }
        })
    });
    map.addLayer(afghanistan_glacier);
    map.addLayer(afghanistan);

    var afghanistan_river = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'http://data.fao.org/maps/wms?',
            params: {
                LAYERS: 'rivers_1292',
            }
        })
    });
    map.addLayer(afghanistan_river);

    var afghanistan_glacier = new ol.layer.Image({
        source: new ol.source.ImageWMS({
            url: 'https://geowebservices.stanford.edu/geoserver/ows?SERVICE=WMS&',
            params: {
                LAYERS: 'kh918qf4828',
            }
        })
    });
    map.addLayer(afghanistan_glacier);

    
}