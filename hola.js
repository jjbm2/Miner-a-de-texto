install.packages("data.table")
install.packages("tm")
install.packages("corpus")
install.packages("wordcloud")

library(data.table)
library(tm)
library(corpus)

dt <- data.table(Name = "jesus", Apellido = "Salazar")

dt2 = array("Hola como estas")
dt3 =list("papa,jitomate")
hoy =Sys.Date()
hora =Sys.time()
mifecha =as.Date("2025-24-09",format="%Y-%d-%m")


comentarios= c("El motivo de este correo es para mandarles la invitación al Taller que se llevara acabo el dia de mañana  el cual lleva el nombre de Planeando mi futuro, esto para que vean las opciones de universidades. quedo atenta a sus comentarios.", 
               "En la versión para estudiantes encontrarán en qué consiste el derecho que se menciona, las maneras en las cuales sí se observa este derecho, y también cómo se ve cuando este derecho está siendo vulnerado",
               "Cada mes se publica un número de esta gaceta en dos versiones, una para docentes y la otra para estudiantes",
               "Todo debde de ser como es.",
               "Que increible esta esto")

grepl("estudiantes",comentarios)
