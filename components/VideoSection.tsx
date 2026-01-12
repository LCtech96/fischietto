export default function VideoSection() {
  const videos = [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/reel/DO50hmNCMHc/?igsh=MWcyZWYyNDBhZWRodg==',
      id: 'DO50hmNCMHc',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/reel/C5gtqWsrE5W/?igsh=dGhkeHA5bmJ4NHJt',
      id: 'C5gtqWsrE5W',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/reel/Cl4MXlEt2vS/?igsh=MW4wa3BrNTkzMHh3Zw==',
      id: 'Cl4MXlEt2vS',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/reel/DON25YxioLq/?igsh=MXJmN21taXh0cnBxMQ==',
      id: 'DON25YxioLq',
    },
    {
      platform: 'TikTok',
      url: 'https://www.tiktok.com/@fischietto__?_r=1&_t=ZN-92Gj4E0I72w',
      id: null,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          I Miei Video
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {video.id ? (
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <iframe
                    src={`https://www.instagram.com/p/${video.id}/embed`}
                    className="w-full h-full max-w-full"
                    frameBorder="0"
                    scrolling="no"
                    allow="encrypted-media"
                    title={`Video ${video.platform} ${index + 1}`}
                    style={{ maxWidth: '100%' }}
                  />
                </div>
              ) : (
                <div className="aspect-square flex flex-col items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 p-8">
                  <div className="text-6xl mb-4">🎬</div>
                  <p className="text-gray-700 text-center mb-4">
                    Guarda i miei video su {video.platform}
                  </p>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Apri su {video.platform} →
                  </a>
                </div>
              )}
              <div className="p-4 border-t border-gray-200">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center justify-center"
                >
                  Apri su {video.platform} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
