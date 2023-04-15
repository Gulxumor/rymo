import { useTranslation } from "react-i18next"
import one from "../../src/assets/images/insta/1.jpg"
import two from "../../src/assets/images/insta/2.jpg"
import three from "../../src/assets/images/insta/3.jpg"
import four from "../../src/assets/images/insta/4.jpg"
import five from "../../src/assets/images/insta/5.jpg"



export const instagram = [
    { id: 1, img: one },
    { id: 2, img: two },
    { id: 3, img: three },
    { id: 4, img: four },
    { id: 5, img: five },
]
function useFooter() {
    const { t } = useTranslation()

    const featured = () => [
        { id: 1, name: t("footer.men"), featured: true },
        { id: 2, name: t("footer.women"), featured: true },
        { id: 3, name: t("footer.boys"), featured: true },
        { id: 4, name: t("footer.girls"), featured: true },
        { id: 5, name: t("hero.new_arrivals"), featured: true },
        { id: 6, name: t("footer.shoes"), featured: true },
        { id: 7, name: t("footer.clothes"), featured: true },
    ]
    return { featured }
}
export default useFooter