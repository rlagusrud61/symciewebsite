from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse


# Create your views here.

def landing(request):
    template = loader.get_template('zephyrus/landing/index.html')
    return HttpResponse(template.render({},request))


def location(request):
    template = loader.get_template('zephyrus/program/location.html')
    return HttpResponse(template.render({},request))

def committee(request):
    template = loader.get_template('zephyrus/committees/index.html')
    return HttpResponse(template.render({}, request))

def partners(request):
    template = loader.get_template('zephyrus/partners/index.html')
    return HttpResponse(template.render({}, request))
