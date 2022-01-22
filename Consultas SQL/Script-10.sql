--a).- Se requiere un listado de productos con sus precios, 
--de aquellos productos cuyo modelo es 2016, ordenado alfabéticamente por nombre.

select product_id, product_name, model_year, list_price 
from products
where model_year = 2016
order by product_name asc;

--b). Se requiere un inventario de productos para mujeres 
--(aquellos que dice Ladies en el nombre) ordenado por precio descendente.

select product_id, product_name, model_year, list_price 
from products
where product_name like '%Ladies%'
order by list_price desc;

--c).-	Se requiere un reporte con la cantidad de productos de cada categoría, 
--ordenado de mayor a menor cantidad

select c.category_id, c.category_name, count(p.product_id)
from categories c
join products p on c.category_id = p.category_id
group by c.category_id
order by count desc;

--d).- Se requiere un reporte con la cantidad de inventario de productos por marca, 
--ordenado descendentemente. 

select b.brand_id, b.brand_name, sum(s.quantity)
from brands b
join products p on b.brand_id = p.brand_id
join stocks s on s.product_id = p.product_id
group by b.brand_id
order by sum desc;

--e).- Se requiere un inventario para la tienda Santa Cruz Bike de los productos que 
--tienen en existencia en la categoría Electric Bikes. 

select p.product_id, p.product_name, stocks.quantity 
from categories c
join products p on p.category_id = c.category_id
join stocks on stocks.product_id = p.product_id 
join stores s on stocks.store_id = s.store_id
where s.store_name = 'Santa Cruz Bikes'
and c.category_name = 'Electric Bikes'
order by p.product_name asc;