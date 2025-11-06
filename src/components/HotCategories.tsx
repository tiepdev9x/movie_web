import Link from 'next/link'
import '../styles/HotCategories/HotCategories.css';

export default function HotCategories() {
  return (
    <div className="hot-cat mt-4 grid grid-cols-6">
      <Link className="row-topic" href="/c/marvel-sieu-anh-hung.vhyYAW">
        <div className="mask z-10 absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgb(50, 79, 209)' }}></div>
        <div className="intro z-20">
          <div className="heading-md lim-2 mb-0">Marvel</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>
      <Link className="row-topic" href="/c/marvel-sieu-anh-hung.vhyYAW">
        <div className="mask z-10 absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgb(102, 102, 153);' }}></div>
        <div className="intro z-20">
          <div className="heading-md lim-2 mb-0">Marvel</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>
      <Link className="row-topic" href="/c/marvel-sieu-anh-hung.vhyYAW">
        <div className="mask z-10 absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgb(119, 97, 180);' }}></div>
        <div className="intro z-20">
          <div className="heading-md lim-2 mb-0">Marvel</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>
      <Link className="row-topic" href="/c/marvel-sieu-anh-hung.vhyYAW">
        <div className="mask z-10 absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgb(205, 126, 95);' }}></div>
        <div className="intro z-20">
          <div className="heading-md lim-2 mb-0">Marvel</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>
      <Link className="row-topic" href="/c/marvel-sieu-anh-hung.vhyYAW">
        <div className="mask z-10 absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgb(46, 50, 69);' }}></div>
        <div className="intro z-20">
          <div className="heading-md lim-2 mb-0">Marvel</div>
          <div className="info">
            <div className="btn btn-sm btn-outline">
              <span>Xem chủ đề</span>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </Link>
      <Link className="row-topic" href="/c/marvel-sieu-anh-hung.vhyYAW">
        <div className="mask z-10 absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgb(50, 79, 209)' }}></div>
        <div className="intro z-20">
          <div className="heading-md lim-2 mb-0">Marvel</div>
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
