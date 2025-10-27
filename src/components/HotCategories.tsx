import Link from 'next/link'

export default function HotCategories() {
  return (
    <div className="topics-list topics-grid topics-line mt-0 grid grid-cols-4">
      <Link className="row-topic" href="/c/marvel-sieu-anh-hung.vhyYAW">
        <div className="mask" style={{ backgroundColor: 'rgb(50, 79, 209)' }}></div>
        <div className="intro">
          <div className="heading-md lim-2 mb-0">Marvel</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>

      <Link className="row-topic" href="/c/4k.bZE4Tf">
        <div className="mask" style={{ backgroundColor: 'rgb(102, 102, 153)' }}></div>
        <div className="intro">
          <div className="heading-md lim-2 mb-0">4K</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>

      <Link className="row-topic" href="/c/sitcom-series-us.SosVge">
        <div className="mask" style={{ backgroundColor: 'rgb(27, 133, 108)' }}></div>
        <div className="intro">
          <div className="heading-md lim-2 mb-0">Sitcom</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>

      <Link className="row-topic" href="/c/long-tieng-cuc-manh.PGxRUU">
        <div className="mask" style={{ backgroundColor: 'rgb(119, 97, 180)' }}></div>
        <div className="intro">
          <div className="heading-md lim-2 mb-0">Lồng Tiếng Cực Mạnh</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>

      <Link className="row-topic" href="/c/xuyen-khong.3TQ3S1">
        <div className="mask" style={{ backgroundColor: 'rgb(205, 126, 95)' }}></div>
        <div className="intro">
          <div className="heading-md lim-2 mb-0">Xuyên Không</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>

      <Link className="row-topic" href="/c/co-trang.wCSzYH">
        <div className="mask" style={{ backgroundColor: 'rgb(167, 57, 57)' }}></div>
        <div className="intro">
          <div className="heading-md lim-2 mb-0">Cổ Trang</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>

      <Link className="row-topic more-topic p-3" href="/chu-de">
        <div className="mask" style={{ backgroundColor: 'rgb(46, 50, 69)' }}></div>
        <div className="intro justify-content-center align-items-center">
          <div className="heading-md mb-0">+4 chủ đề</div>
        </div>
      </Link>
    </div>
  )
}
