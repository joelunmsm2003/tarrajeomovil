from django.contrib import admin
from app.models import *
from django.contrib.admin.filters import RelatedOnlyFieldListFilter



@admin.register(Servicio)
class ServicioAdmin(admin.ModelAdmin):
	list_display = ('id','nombre')
	list_editable = ('nombre',)


@admin.register(Especialidad)
class EspecialidadAdmin(admin.ModelAdmin):
	list_display = ('id','nombre')
	list_editable = ('nombre',)

@admin.register(Reserva)
class ReservaAdmin(admin.ModelAdmin):
	list_display = ('id','usuario','servicio','inicio','fin')
	

	def usuario(self, obj):
		return obj.user.username

	def servicio(self, obj):
		return obj.servicio.nombre



# #Some SimpleListFilter filters
# @admin.register(Especialidad)
# class EspecialidadAdmin(admin.ModelAdmin):
# 	fields = ('nombre', 'servicio')
# 	list_filter = ('servicio__nombre',)

# 	list_display = ('get_servicio','nombre')



# 	def get_servicio(self, obj):
# 		return obj.servicio.nombre


