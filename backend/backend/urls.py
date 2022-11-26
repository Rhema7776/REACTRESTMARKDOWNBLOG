from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')), #login endpoint
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    # path('accounts/', include('allauth.urls')),
    # path('api/blog/', include('blog.urls', namespace='blog'))
    path('api/', include('posts.urls', namespace='posts'))
]
