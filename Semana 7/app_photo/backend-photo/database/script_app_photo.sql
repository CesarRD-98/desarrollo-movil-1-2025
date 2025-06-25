use funciones_agregacion;
select * from productos;

select count(*) as cantidad, categoryCode as categoria from productos group by categoryCode; 
/*
ALTER TABLE productos CHANGE `category.code` categoryCode VARCHAR(255);
ALTER TABLE productos CHANGE `brand.code` brandCode VARCHAR(255);
ALTER TABLE productos CHANGE `family.code` familyCode VARCHAR(255);
ALTER TABLE productos CHANGE `line.code` lineCode VARCHAR(255);
ALTER TABLE productos CHANGE `productSegment.code` productSegmentCode VARCHAR(255);
*/

select count(*) as cantidad, plannerCode as codigo_de_planificacion from productos group by plannerCode; 

-- se hizo una modificacion a los nombres de las columnas con representacion de <nombre.code> a <nombreCode> de las anteriores columnas
-- CesarRD
