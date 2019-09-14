import { mount } from '@vue/test-utils'
import kanjinizedDate from '@/components/date'

describe('kanjiizedDate', () => {
  test('is correct', () => {
    const date = new Date(2019, 9, 1, 14, 20, 0)
    const wrapper = mount(kanjinizedDate, {
      propsData: {
        date: date
      }
    })
    expect(wrapper.vm.dateKanjinizer(date)).toBe(
      '二〇一九年九月一日十四時二十分'
    )
  })
})
