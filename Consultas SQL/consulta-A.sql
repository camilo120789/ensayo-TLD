--a).- Se requiere un listado de productos con sus precios, 
--de aquellos productos cuyo modelo es 2016, ordenado alfab�ticamente por nombre.

select product_id, product_name, model_year, list_price 
from products
where model_year = 2016
order by product_name asc;