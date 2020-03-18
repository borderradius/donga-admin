import * as d3 from 'd3'

class Axis {
  constructor(type, pos, axisData = [], r0, r1) {
    this.scaleType(type)
    this.position(pos)
    this._listener = {}
    this._domain = []
    this._range = [r0, r1]
    this._rangeV = []
    this._padding = []
    this.domain(axisData)
  }

  /**
   * 합성하여 camelCase로 변경
   * @param p 'scale'
   * @param v 'time, linear, power, log ..'
   * scaleTime, scaleLinear
   */
  name(p, v) {
    return p + v.charAt(0).toUpperCase() + v.substr(1).toLowerCase()
  }
  /**
   * 스케일 타입을 만드는 함수
   * @param type linear, time, power, log, identity etc..
   */
  scaleType(type) {
    this.scale = d3[this.name('scale', (this.type = type))]()
    return this
  }
  /**
   * 축의 위치를 설정
   * @param pos top, left, bottom, right
   */
  position(pos) {
    this.axis = d3[this.name('axis', pos)](this.scale)
    return this
  }
  /**
   * 도메인영역 설정 - 실제값을 범위
   * @param d0 도메인값
   * @param d1 도메인값
   */
  domain(axisData) {
    // 실데이터가 숫자면
    if (typeof axisData[0] === 'number' && typeof axisData[1] === 'number') {
      this._domain[0] = axisData[0] || 0
      this._domain[1] = axisData[1] || 0
      this.scale.domain(this._domain)
    } else {
      // 실데이터가 스트링배열이면
      this._domain = axisData
      this.scale.domain(this._domain)
    }
    return this
  }
  /**
   * 패딩영역 설정 - 축의 끝에 얼마나 여백을 줄것인가
   * @param d0 패딩값
   * @param d1 패딩값
   */
  padding(v) {
    this._padding[0] = v[0] || 0
    this._padding[1] = v[1] || 0
    return this.range()
  }
  /**
   * domain의 값을 그래프에 축척할 때 그 범위
   * 보통 그래프의 너비값px 생각하면 됌.
   */
  range(...a) {
    if (a.length === 2) {
      this._range[0] = a[0] || 0
      this._range[1] = a[1] || 0
    }
    this._rangeV[0] = this._range[0] + this._padding[0]
    this._rangeV[1] = this._range[1] - this._padding[1]
    this.scale.range(this._rangeV)
    return this
  }
  /**
   * 축이 그려질 태그. <g id="xaxis"></g>
   * @param s 선택자
   */
  select(s) {
    if (s) this._select = typeof s === 'string' ? d3.select(s) : s
    return this
  }
  /**
   * 해당 축의 위치 지정
   * @param tx 축의 x좌표
   * @param ty 축의 y좌표
   */
  translate(tx, ty) {
    // 축변환지정
    let isUpdated = false
    if (typeof tx === 'number' && tx !== this.tx) {
      this.tx = tx
      isUpdated = true
    }
    if (typeof ty === 'number' && ty !== this.ty) {
      this.ty = ty
      isUpdated = true
    }
    if (isUpdated)
      this._select.attr('transform', `translate(${this.tx},${this.ty})`)
    return this
  }
  /**
   * 받은 데이터를 바탕으로 렌더링
   * @param select 셀렉터
   * @param tx 축의 x좌표
   * @param ty 축의 y좌표
   */
  render(select, tx, ty) {
    if (select) this.select(select).translate(tx, ty)
    this._select.call(this.axis)
    return this
  }
  listener(k, f) {
    if (f) {
      this._listener[k] = () => f.call(this)
      return this
    }
    return this._listener[k]
  }
}

export { Axis }
