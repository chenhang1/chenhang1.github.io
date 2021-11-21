const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "嘉宾",
        artist: '路飞文',
        url: 'http://music.163.com/song/media/outer/url?id=1846489646.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/84.jpg',
      },
      {
        name: 'MOM',
        artist: '蜡笔小心',
        url: 'http://music.163.com/song/media/outer/url?id=1387581250.mp3',
        cover: 'http://oeff2vktt.bkt.clouddn.com/image/8.jpg',
      },
    ]
});