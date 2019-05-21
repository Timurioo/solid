import { IQuiz } from '../IQuiz'

const quiz: IQuiz = {
  name: 'lsp-anti-1',
  question: 'В чём заключается суть шаблона «Состояние»?',
  variants: [
    {
      text: 'Создаёт новую сущность, которая хранит состояние всего приложения внутри себя',
      description: 'Состояние может описывать и часть системы тоже, например, при использовании конечных автоматов'
    },
    {
      text: 'Позволяет описывать разное поведение для компонентов в зависимости от их состояния'
    },
    {
      text: 'Помогает очистить код от множественных проверок при выполнении каких-то действий'
    },
    {
      text:
        'Прячет управление переходами от одного состояния к другому внутри какой-то сущности без возможности достучаться до этого метода',
      description: 'Это описание больше подходит шаблону «Стратегия»'
    }
  ],
  meta: {
    correctAnswers: [1, 2]
  }
}

export default quiz
