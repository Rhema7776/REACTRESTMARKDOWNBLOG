from rest_framework import generics, permissions

from .models import Post
from .serializers import PostSerializer, PostCreateSerializer, PostUpdateSerializer

# Create your views here.
class PostListView(generics.ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class PostDetailView(generics.RetrieveAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    lookup_field = 'slug'

class PostCreateView(generics.CreateAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = PostCreateSerializer

    def perform_create(self, serializer):
        # print(serializer.data)
        serializer.save(user=self.request.user)
    
        
class PostUpdateView(generics.UpdateAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Post.objects.all()
    serializer_class = PostUpdateSerializer
    lookup_field = 'slug'

class PostDeleteView(generics.DestroyAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Post.objects.all()
    lookup_field = 'slug'


