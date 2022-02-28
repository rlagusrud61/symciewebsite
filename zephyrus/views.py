from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse


# Create your views here.

def content(request):
    template = loader.get_template('zephyrus/content/index.html')
    return HttpResponse(template.render({}, request))


def location(request):
    template = loader.get_template('zephyrus/program/location.html')
    return HttpResponse(template.render({}, request))


def committee(request):
    template = loader.get_template('zephyrus/committees/index.html')
    return HttpResponse(template.render({}, request))


def partners(request):
    template = loader.get_template('zephyrus/partners/index.html')
    return HttpResponse(template.render({}, request))


def speakers(request):
    template = loader.get_template('zephyrus/program/speakers.html')
    return HttpResponse(template.render({}, request))
