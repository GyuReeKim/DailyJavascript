from django.shortcuts import render, redirect, get_object_or_404
from .models import Post
from django.http import JsonResponse

# Create your views here.
def index(request):
    posts = Post.objects.all()
    return render(request, 'likepages/index.html', {'posts': posts})

def like(request, id):
    if request.is_ajax():
        post = get_object_or_404(Post, id=id)
        user = request.user
        # if user in post.like_users.all():
        if post.like_users.filter(id=user.id):
            post.like_users.remove(user)
            # 좋아요 버튼이 눌렸는지 확인하는 변수
            is_like = False
        else:
            post.like_users.add(user)
            is_like = True
        likes_count = post.like_users.all().count()
        context = {'is_like': is_like, 'likes_count': likes_count}
        # JSON 형태로 Model Object를 리턴한다.
        return JsonResponse(context)
    else:
        return JsonResponse({'message': '잘못된 요청입니다.'})