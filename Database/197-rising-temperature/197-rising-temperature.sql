select w1.id from weather w1 
join (select *, DATEADD(DAY, 1, (Recorddate)) lastday from weather) w2 
on w1.recorddate = w2.lastday 
where w1.temperature > w2.temperature