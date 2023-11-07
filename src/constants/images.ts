import CATEGORY_APPLIANCE from '@assets/images/category_appliance.svg'
import CATEGORY_BOOK from '@assets/images/category_book.svg'
import CATEGORY_CAR from '@assets/images/category_car.svg'
import CATEGORY_DIGITAL_DEVICE from '@assets/images/category_ditigaldevice.svg'
import CATEGORY_DIGITAL_FURNITURE from '@assets/images/category_furniture.svg'
import CATEGORY_GAME from '@assets/images/category_game.svg'
import CATEGORY_MAN_GOODS from '@assets/images/category_mangoods.svg'
import CATEGORY_MORE from '@assets/images/category_more.svg'
import CATEGORY_PET_GOODS from '@assets/images/category_petgoods.svg'
import CATEGORY_SPORTS from '@assets/images/category_sports.svg'
import CATEGORY_TOY from '@assets/images/category_toy.svg'
import CATEGORY_WOMAN_GOODS from '@assets/images/category_womangoods.svg'
import CHECKBOARD from '@assets/images/checkboard.svg'
import LOGO from '@assets/images/logo.svg'
import MAIL from '@assets/images/mail.svg'
import MESSAGE from '@assets/images/message.svg'

type ImageKey = keyof typeof IMAGE

export const IMAGE = {
  CATEGORY_APPLIANCE,
  CATEGORY_BOOK,
  CATEGORY_CAR,
  CATEGORY_DIGITAL_DEVICE,
  CATEGORY_DIGITAL_FURNITURE,
  CATEGORY_GAME,
  CATEGORY_MAN_GOODS,
  CATEGORY_MORE,
  CATEGORY_PET_GOODS,
  CATEGORY_SPORTS,
  CATEGORY_TOY,
  CATEGORY_WOMAN_GOODS,
  CHECKBOARD,
  LOGO,
  MAIL,
  MESSAGE
}

for (const key in IMAGE) {
  const imageKey = key as ImageKey

  IMAGE[imageKey] = IMAGE[imageKey].src
}
