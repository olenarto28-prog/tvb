const NodeMediaServer = require('node-media-server');

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 4000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: process.env.PORT || 8000, // Usa a porta da hospedagem online
    allow_origin: '*' // Permite que o seu player web acesse o vídeo sem travar
  },
  trans: {
    ffmpeg: '/usr/bin/ffmpeg', // Caminho padrão do FFmpeg no servidor Linux online
    tasks: [
      {
        app: 'live',
        hls: true,
        hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
        dash: false
      }
    ]
  }
};

var nms = new NodeMediaServer(config)
nms.run();
