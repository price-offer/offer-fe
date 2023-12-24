import CATEGORY_APPLIANCE from '@assets/images/category_appliance.svg'
import CATEGORY_BOOKS from '@assets/images/category_books.svg'
import CATEGORY_CAR from '@assets/images/category_car.svg'
import CATEGORY_DIGITAL from '@assets/images/category_digital.svg'
import CATEGORY_FURNITURE from '@assets/images/category_furniture.svg'
import CATEGORY_GAME from '@assets/images/category_game.svg'
import CATEGORY_MEN_FASHION from '@assets/images/category_menfashion.svg'
import CATEGORY_OTHER from '@assets/images/category_other.svg'
import CATEGORY_PET from '@assets/images/category_pet.svg'
import CATEGORY_SPORTS from '@assets/images/category_sports.svg'
import CATEGORY_TOY from '@assets/images/category_toy.svg'
import CATEGORY_WOMEN_FASHION from '@assets/images/category_womanfashion.svg'
import CHECKBOARD from '@assets/images/checkboard.svg'
import LOGO from '@assets/images/logo.svg'
import MAIL from '@assets/images/mail.svg'
import MESSAGE from '@assets/images/message.svg'

type ImageKey = keyof typeof IMAGE

export const IMAGE = {
  CATEGORY_APPLIANCE,
  CATEGORY_BOOKS,
  CATEGORY_CAR,
  CATEGORY_DIGITAL,
  CATEGORY_FURNITURE,
  CATEGORY_GAME,
  CATEGORY_MEN_FASHION,
  CATEGORY_OTHER,
  CATEGORY_PET,
  CATEGORY_SPORTS,
  CATEGORY_TOY,
  CATEGORY_WOMEN_FASHION,
  CHECKBOARD,
  LOGO,
  MAIL,
  MESSAGE
}

for (const key in IMAGE) {
  const imageKey = key as ImageKey

  IMAGE[imageKey] = IMAGE[imageKey].src
}
