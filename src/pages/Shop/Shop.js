import styles from './Shop.module.scss';
import classNames from 'classnames/bind';

import { Container, Col, Row, Pagination } from 'react-bootstrap';
import ItemShop from './../../components/ItemShop/ItemShop';
import { useState } from 'react';

const cx = classNames.bind(styles);

const itemsShop = [
    {
        src: 'https://s199.imacdn.com/vg/2022/11/16/9fcfe763bfe19b61_b42f9681215de915_58902166858383369674.jpg',
        title: 'Truyện tranh Thám tử lừng danh conan tập 100 tùy chọn phiên bản (tặng kèm poster)',
        shop: 'https://shopee.vn/Truy%E1%BB%87n-tranh-Th%C3%A1m-t%E1%BB%AD-l%E1%BB%ABng-danh-conan-t%E1%BA%ADp-100-t%C3%B9y-ch%E1%BB%8Dn-phi%C3%AAn-b%E1%BA%A3n-(t%E1%BA%B7ng-k%C3%A8m-poster)-i.17944263.22302691238',
        price: '100.000đ',
        type: 'truyen',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/99a2b15d16ce25d0_6be38f661ae22b0f_57992166851096129674.jpg',
        title: 'Bình Nước Thể Thao Bằng Nhựa Sức Chứa Lớn Mẫu Mới 2022 One Piece Luffy Anime',
        shop: 'https://shopee.vn/B%C3%ACnh-N%C6%B0%E1%BB%9Bc-Th%E1%BB%83-Thao-B%E1%BA%B1ng-Nh%E1%BB%B1a-S%E1%BB%A9c-Ch%E1%BB%A9a-L%E1%BB%9Bn-M%E1%BA%ABu-M%E1%BB%9Bi-2022-One-Piece-Luffy-Anime-i.818036933.21232985253',
        price: '188.690đ',
        type: 'qualuuniem',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/117ae9ccf87bb982_5c03894c82e0a474_33017166851081569674.jpg',
        title: 'Thảm họa tiết anime Haikyuu Decor Trang Trí Nhà Cửa Phòng Khách Phòng Ngủ Chống Trơn Trượt',
        shop: 'https://shopee.vn/Th%E1%BA%A3m-h%E1%BB%8Da-ti%E1%BA%BFt-anime-Haikyuu-Decor-Trang-Tr%C3%AD-Nh%C3%A0-C%E1%BB%ADa-Ph%C3%B2ng-Kh%C3%A1ch-Ph%C3%B2ng-Ng%E1%BB%A7-Ch%E1%BB%91ng-Tr%C6%A1n-Tr%C6%B0%E1%BB%A3t-i.460156725.18160120014',
        price: '148.000đ',
        type: 'qualuuniem',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/3fba91ebd13d7cdb_fc0676b488bf19fa_32781166851070899674.jpg',
        title: 'Thảm họa tiết anime Jujutsu Kaisen Decor Trang Trí Nhà Cửa Phòng Khách Phòng Ngủ Chống Trơn Trượt',
        shop: 'https://shopee.vn/Th%E1%BA%A3m-h%E1%BB%8Da-ti%E1%BA%BFt-anime-Jujutsu-Kaisen-Decor-Trang-Tr%C3%AD-Nh%C3%A0-C%E1%BB%ADa-Ph%C3%B2ng-Kh%C3%A1ch-Ph%C3%B2ng-Ng%E1%BB%A7-Ch%E1%BB%91ng-Tr%C6%A1n-Tr%C6%B0%E1%BB%A3t-i.460156725.19560109352',
        price: '148.000đ',
        type: 'qualuuniem',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/8b30c4d2f5803a8b_d5e1072bf200722a_35884166851054989674.jpg',
        title: 'ĐÈN LED ANIME nhân vật One Piece',
        shop: 'https://shopee.vn/%C4%90%C3%88N-LED-ANIME-nh%C3%A2n-v%E1%BA%ADt-One-Piece-i.168413396.19161372146',
        price: '152.100đ',
        type: 'dientu',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/a46d51e0238490f9_e80db9584ff74f25_44285166851022159674.jpg',
        title: 'Áo gối, Ruột Gối Anime 120 x 40 cm Kích thước dài 1m2 Vỏ gối có thể in tất cả hình Dakimakura',
        shop: 'https://shopee.vn/(%C4%90%E1%BB%8Dc-m%C3%B4-t%E1%BA%A3-tr%C6%B0%E1%BB%9Bc-khi-%C4%91%E1%BA%B7t)-%C3%81o-g%E1%BB%91i-Ru%E1%BB%99t-G%E1%BB%91i-Anime-120-x-40-cm-K%C3%ADch-th%C6%B0%E1%BB%9Bc-d%C3%A0i-1m2-V%E1%BB%8F-g%E1%BB%91i-c%C3%B3-th%E1%BB%83-in-t%E1%BA%A5t-c%E1%BA%A3-h%C3%ACnh-Dakimakura-i.77582226.7555213006',
        price: '490.000đ',
        type: 'qualuuniem',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/bafc079c2a3b0b71_4c7f3c6d7f0d5c4f_31787166851005549674.jpg',
        title: 'Thảm họa tiết anime Hunter x Hunter Decor Trang Trí Nhà Cửa Phòng Khách Phòng Ngủ Chống Trơn Trượt',
        shop: 'https://shopee.vn/Th%E1%BA%A3m-h%E1%BB%8Da-ti%E1%BA%BFt-anime-Hunter-x-Hunter-Decor-Trang-Tr%C3%AD-Nh%C3%A0-C%E1%BB%ADa-Ph%C3%B2ng-Kh%C3%A1ch-Ph%C3%B2ng-Ng%E1%BB%A7-Ch%E1%BB%91ng-Tr%C6%A1n-Tr%C6%B0%E1%BB%A3t-i.460156725.19060117642',
        price: '148.000đ',
        type: 'qualuuniem',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/605fd7eb5712dd74_fb8bdb34609fea7c_36357166850994339674.jpg',
        title: 'Thảm họa tiết anime Attack on titan Decor Trang Trí Nhà Cửa Phòng Khách Phòng Ngủ Chống Trơn Trượt',
        shop: 'https://shopee.vn/Th%E1%BA%A3m-h%E1%BB%8Da-ti%E1%BA%BFt-anime-Attack-on-titan-Decor-Trang-Tr%C3%AD-Nh%C3%A0-C%E1%BB%ADa-Ph%C3%B2ng-Kh%C3%A1ch-Ph%C3%B2ng-Ng%E1%BB%A7-Ch%E1%BB%91ng-Tr%C6%A1n-Tr%C6%B0%E1%BB%A3t-i.460156725.19860124477',
        price: '148.000đ',
        type: 'qualuuniem',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/001552786202d9e0_60e8f968d49ddf33_36793166850961349674.jpg',
        title: 'Thảm họa tiết anime One Piece Decor Trang Trí Nhà Cửa Phòng Khách Phòng Ngủ Chống Trơn Trượt',
        shop: 'shopee.vn/Thảm-họa-tiết-anime-One-Piece-Decor-Trang-Trí-Nhà-Cửa-Phòng-Khách-Phòng-Ngủ-Chống-Trơn-Trượt-i.460156725.16589119339',
        price: '148.000đ',
        type: 'qualuuniem',
    },

    {
        src: 'https://s199.imacdn.com/vg/2022/11/11/6ca267d97c516ebb_b11e5f7ae6a0ad97_37645166815521979674.jpg',
        title: 'Mô hình Nendoroid rem 663/ tượng figure anime Rem',
        shop: 'https://tiki.vn/mo-hinh-nendoroid-rem-663-tuong-figure-anime-ramem-p198283381.html',
        price: '379.000₫',
        type: 'mohinh',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/11/c1309eebb85c65ce_e8b279bf92ba803f_36670166815510789674.jpg',
        title: 'Mô hình Nendoroid zero two darling in the franxx 952/ tượng figure anime 952 darling in the franxx',
        shop: 'https://tiki.vn/mo-hinh-nendoroid-zero-two-darling-in-the-franxx-952-tuong-figure-anime-952-darling-in-the-franxx-p198283495.html',
        price: '379.000đ',
        type: 'mohinh',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/11/9d36373bb5224829_c5997b3e5d745ff3_45415166815466959674.jpg',
        title: 'Mô Hình Anime Onepice Siêu Ngầu - Ong Mặt Bự',
        shop: 'https://tiki.vn/mo-hinh-anime-onepice-sieu-ngau-ong-mat-bu-p198585302.html',
        price: '250.000đ',
        type: 'mohinh',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/11/a0a22172f2f31b8a_608b6757533d71a0_33935166815449129674.jpg',
        title: 'Mô Hình Naruto ChiBi, Bộ 6 Nhân Vật Naruto, Kakashi, Itachi, Sasuke, Garaa, Siêu Đẹp - Figure Anime Naruto',
        shop: 'https://tiki.vn/mo-hinh-naruto-chibi-bo-6-nhan-vat-naruto-kakashi-itachi-sasuke-garaa-sieu-dep-figure-anime-naruto-p176270954.html',
        price: '39.000đ',
        type: 'mohinh',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/11/5e36f6236399e76d_f3ba3e8b79ab7e37_43963166815429719674.jpg',
        title: 'Mô hình Luffy gear 4',
        shop: 'https://tiki.vn/mo-hinh-luffy-gear-4-p203499370.html',
        price: '220.000đ',
        type: 'mohinh',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/11/9c572479b83b6cad_46f938ef02ce0aab_38221166815353279674.jpg',
        title: 'Mô hình Hitachi',
        shop: 'https://tiki.vn/mo-hinh-hitachi-p204039419.html',
        price: '92.000đ',
        type: 'mohinh',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/02/dbb345a8c00e9c41_503990cb644c1bce_24495166736845129674.jpg',
        title: 'Ốp lưng iPhone cặp đôi anime viền vuông silicon mềm dẻo cho iphone 6/6s/7/8/X/XS/XR/11/12/13 Pro Plus Max Doraemon',
        shop: 'https://shopee.vn/%E1%BB%90p-l%C6%B0ng-iPhone-c%E1%BA%B7p-%C4%91%C3%B4i-anime-vi%E1%BB%81n-vu%C3%B4ng-silicon-m%E1%BB%81m-d%E1%BA%BBo-cho-iphone-6-6s-7-8-X-XS-XR-11-12-13-Pro-Plus-Max-Doraemon-i.694538429.21924560178',
        price: '23.000đ',
        type: 'dientu',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/02/3d978818d213ad6a_8242df8728048555_37695166736711159674.jpg',
        title: 'BST Áo thun Anime Tokyo Revengers Mikey Valhalla nhiều mẫu áo trắng đẹp mẫu mới',
        shop: 'https://shopee.vn/BST-%C3%81o-thun-Anime-Tokyo-Revengers-Mikey-Valhalla-nhi%E1%BB%81u-m%E1%BA%ABu-%C3%A1o-tr%E1%BA%AFng-%C4%91%E1%BA%B9p-m%E1%BA%ABu-m%E1%BB%9Bi-i.449901840.16622119574',
        price: '89.000đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/02/9c801c8c90e90126_82cadaaa9482193c_37305166736695929674.jpg',
        title: 'BST áo thun trắng in hình logo Anime tokyo revengers Sano Manjiro - takemichi - ngầu',
        shop: 'https://shopee.vn/BST-%C3%A1o-thun-tr%E1%BA%AFng-in-h%C3%ACnh-logo-Anime-tokyo-revengers-Sano-Manjiro-takemichi-ng%E1%BA%A7u-i.449901840.17122132347',
        price: '87.000đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/02/97e2484f2948ec23_9621b4a6f460a9e6_24100166736676349674.jpg',
        title: 'Aaron1 Set 4 Mô Hình Nhân Vật Anime Sirens Bằng Pvc Dùng Sưu Tầm',
        shop: 'https://shopee.vn/Aaron1-Set-4-M%C3%B4-H%C3%ACnh-Nh%C3%A2n-V%E1%BA%ADt-Anime-Sirens-B%E1%BA%B1ng-Pvc-D%C3%B9ng-S%C6%B0u-T%E1%BA%A7m-i.455472447.12106969711',
        price: '106.000đ',
        type: 'mohinh',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/02/5ead9a9085d29724_420590144f25ed2d_40993166736658619674.jpg',
        title: 'Móc khóa anime genshin impact 2 mặt nhựa mica móc chìa khoá mô hình nhân vật game PKDANH',
        shop: 'https://shopee.vn/M%C3%B3c-kh%C3%B3a-anime-genshin-impact-2-m%E1%BA%B7t-nh%E1%BB%B1a-mica-m%C3%B3c-ch%C3%ACa-kho%C3%A1-m%C3%B4-h%C3%ACnh-nh%C3%A2n-v%E1%BA%ADt-game-PKDANH-i.744469092.21554304062',
        price: '54.808đ',
        type: 'qualuuniem',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/22/19c68824a1684a45_2c005d2eeafecfd0_54413166643648239674.jpg',
        title: 'Tranh Dán Tường Anime Demon Slayer - Kimetsu No Yaiba -Thanh Gươm Diệt Quỷ - Poster Áp PhíchBy AnimeX',
        shop: 'https://shopee.vn/Tranh-D%C3%A1n-T%C6%B0%E1%BB%9Dng-Anime-Demon-Slayer-Kimetsu-No-Yaiba-Thanh-G%C6%B0%C6%A1m-Di%E1%BB%87t-Qu%E1%BB%B7-Poster-%C3%81p-Ph%C3%ADchBy-AnimeX-i.240503433.15904788783',
        price: '12.000đ',
        type: 'qualuuniem',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/22/11e48de18e4934dc_8f048b5ee1b52315_46369166643632629674.jpg',
        title: 'Mô hình Figure One Piece - Roronoa Zoro siêu to màu sắc nổi bật , dáng ngồi oai phong SUPBER STORE',
        shop: 'shopee.vn/Mô-hình-Figure-One-Piece-Roronoa-Zoro-siêu-to-màu-sắc-nổi-bật-dáng-ngồi-oai-phong-SUPBER-STORE-i.863660934.21745464441',
        price: '365.000đ',
        type: 'mohinh',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/22/baa48f0b0ea3f206_89e3da76047f8c46_41482166643609419674.jpg',
        title: 'Lót chuột anime 20x20 và 21x26 full 50 mẫu pad chuột giá rẻ siêu dễ thương VN8',
        shop: 'shopee.vn/Lót-chuột-anime-20x20-và-21x26-full-50-mẫu-pad-chuột-giá-rẻ-siêu-dễ-thương-VN8-i.357915542.7180098707',
        price: '15.000đ',
        type: 'dientu',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/22/e6d0b097dca836f4_ab7149561f8a596a_39231166643502289674.jpg',
        title: 'Áo khoác kimono phong cách anime Demon Slayer dùng hóa trang 2022',
        shop: 'https://shopee.vn/%C3%81o-kho%C3%A1c-kimono-phong-c%C3%A1ch-anime-Demon-Slayer-d%C3%B9ng-h%C3%B3a-trang-2022-i.182586033.8311230928',
        price: '180.797đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/22/deda7207cda0185a_b54547f16642e315_41702166643325529674.jpg',
        title: 'Bộ 12 nhãn vở Anime nhiều mẫu độc - Kimetsu no yaiba, Genshin impact, Jujutsu Kaisen,...',
        shop: 'https://shopee.vn/B%E1%BB%99-12-nh%C3%A3n-v%E1%BB%9F-Anime-nhi%E1%BB%81u-m%E1%BA%ABu-%C4%91%E1%BB%99c-Kimetsu-no-yaiba-Genshin-impact-Jujutsu-Kaisen-...-i.85693503.9027628711',
        price: '14.000đ',
        type: 'qualuuniem',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/18/a835d888a05c4283_fa28186c7cdecb06_19966166610610689674.jpg',
        title: 'Máy ép chậm Hommy ZZJ834L',
        shop: 'https://www.dienmayxanh.com/may-ep-trai-cay/may-ep-cham-hommy-zzj834l',
        price: '2.010.000đ',
        type: 'dientu',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/18/c61f69ca73e45e26_8eacb3392169002d_25858166610593929674.jpg',
        title: 'Bàn ủi hơi nước Tefal FV3910E0 2400W',
        shop: 'https://www.dienmayxanh.com/ban-ui/tefal-fv3910e0',
        price: '666.000',
        type: 'dientu',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/18/5ea2123db169e822_ce512be7cca68055_22164166610573189674.jpg',
        title: 'Đồng hồ MVW 40 mm Nam MS069-02 ',
        shop: 'https://www.dienmayxanh.com/dong-ho-deo-tay/mvw-ms069-02-nam',
        price: '1.463.000đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/18/21214d6180349686_51b103637f07b0d0_15612166610559259674.jpg',
        title: 'Đồng hồ TITAN Classique 42.2 mm Nam 1585SL08',
        shop: 'https://www.dienmayxanh.com/dong-ho-deo-tay/titan-1585sl08-nam',
        price: '774.000đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/18/bf975493a60e2fb7_bad28463a914ad41_38541166610540589674.jpg',
        title: 'Laptop Lenovo Yoga Duet 7 13ITL6 i7 1165G7/16GB/1TB SSD/Touch/Pen/Win10',
        shop: 'https://www.dienmayxanh.com/laptop/lenovo-yoga-duet-7-13itl6-i7-82ma003uvn',
        price: '35.990.000',
        type: 'dientu',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/18/86e16b49a4f15b4c_9a780f68ebc6d0fd_34194166610525249674.jpg',
        title: 'Xe đạp địa hình MTB Totem W760 27.5 inch Size L',
        shop: 'https://www.dienmayxanh.com/xe-dap/mtb-totem-w760-27-5-inch-den-do-l',
        price: '4.595.000',
        type: 'khac',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/18/5a9ba95f09d8cb93_01536a81f844ed1b_62495166608333239674.jpg',
        title: 'Nhẫn bạc đính đá PNJSilver',
        shop: 'https://www.pnj.com.vn/nhan-nu-bac-cao-cap-6038.html',
        price: '328.000đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/18/ea41aab0f6f966f6_14b9e2ad8422c587_30717166608315999674.jpg',
        title: 'Nhẫn Kim cương Vàng 14K PNJ True',
        shop: 'https://www.pnj.com.vn/nhan-kim-cuong-vang-14k-pnj-ddddy000511.html',
        price: '5.590.000đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/15/6deecfb82d431d12_768f07b68cc0c028_37065166584434179674.jpg',
        title: 'Mô Hình NARUTO Tiên Nhân Thuật Cao 36cm, FIGURE Naruto Trang Trí, Mô Hình ANIME',
        shop: 'https://shopee.vn/M%C3%B4-H%C3%ACnh-NARUTO-Ti%C3%AAn-Nh%C3%A2n-Thu%E1%BA%ADt-Cao-36cm-FIGURE-Naruto-Trang-Tr%C3%AD-M%C3%B4-H%C3%ACnh-ANIME-i.862799365.18949466705',
        price: '779.000đ',
        type: 'mohinh',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/15/bfe9d39f2ccf73b0_372c2747e6c25121_57730166584407739674.jpg',
        title: 'Bài tây anime manga, tú lơ khơ tổng hợp nhiều mẫu One Piece, Naruto, Dragon Ball, Kimetsu no Yaiba, Conan, Doraemon',
        shop: 'https://shopee.vn/B%C3%A0i-t%C3%A2y-anime-manga-t%C3%BA-l%C6%A1-kh%C6%A1-t%E1%BB%95ng-h%E1%BB%A3p-nhi%E1%BB%81u-m%E1%BA%ABu-One-Piece-Naruto-Dragon-Ball-Kimetsu-no-Yaiba-Conan-Doraemon-i.469238345.4395210578',
        price: '39.000',
        type: 'mohinh',
    },

    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/74f5e7d43a4cc473_37596544ff894f8a_26567166850933779674.jpg',
        title: 'Áo Hoodies Sweater Nam Nữ From Rộng Nỉ Bông Có Mũ Hai lớp In Chữ - Unisex',
        shop: 'https://shopee.vn/%C3%81o-Hoodies-Sweater-Nam-N%E1%BB%AF-From-R%E1%BB%99ng-N%E1%BB%89-B%C3%B4ng-C%C3%B3-M%C5%A9-Hai-l%E1%BB%9Bp-In-Ch%E1%BB%AF-Unisex-i.705124494.16280617845',
        price: '79.900đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/acefd501fb5218ce_18dbf4d1a78c7d64_29872166850912349674.jpg',
        title: 'Set áo cổ yếm không tay nude ren hoa nổi kèm quần culotes ống suông',
        shop: 'https://shopee.vn/Set-%C3%A1o-c%E1%BB%95-y%E1%BA%BFm-kh%C3%B4ng-tay-nude-ren-hoa-n%E1%BB%95i-k%C3%A8m-qu%E1%BA%A7n-culotes-%E1%BB%91ng-su%C3%B4ng-i.261349488.15481682708',
        price: '245.000đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/85a030f578aae823_4ee4da8e4a065fda_18776166850888439674.jpg',
        title: 'Áo dài tay polo Cotton mịn màng - September7th',
        shop: 'https://shopee.vn/%C3%81o-d%C3%A0i-tay-polo-Cotton-m%E1%BB%8Bn-m%C3%A0ng-September7th-i.286660059.5060482727',
        price: '163.400đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/4bff465ea30e2e74_74b7170ab4f65185_32303166850857439674.jpg',
        title: 'Son Kem Trái Cây Xiyuan Lip Glaza Siêu Lì Và Mịn Môi, Son Lên Môi Cực Xinh',
        shop: 'https://shopee.vn/X1015-A6-Son-Kem-Tr%C3%A1i-C%C3%A2y-Xiyuan-Lip-Glaza-Si%C3%AAu-L%C3%AC-V%C3%A0-M%E1%BB%8Bn-M%C3%B4i-Son-L%C3%AAn-M%C3%B4i-C%E1%BB%B1c-Xinh-i.107632788.8136385396',
        price: '34.500đ',
        type: 'trangphuc',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/fdb195610324c29e_dd84b03a39bd20f9_28035166850843129674.jpg',
        title: 'Máy phun sương tạo ẩm không khí xông tinh dầu humidifier X21 dung tích 3 lít có tích hợp đèn khay để tinh dầu',
        shop: 'https://shopee.vn/M%C3%A1y-phun-s%C6%B0%C6%A1ng-t%E1%BA%A1o-%E1%BA%A9m-kh%C3%B4ng-kh%C3%AD-x%C3%B4ng-tinh-d%E1%BA%A7u-humidifier-X21-dung-t%C3%ADch-3-l%C3%ADt-c%C3%B3-t%C3%ADch-h%E1%BB%A3p-%C4%91%C3%A8n-khay-%C4%91%E1%BB%83-tinh-d%E1%BA%A7u-i.202721408.6218988206',
        price: '205.000đ',
        type: 'dientu',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/11/15/d881c8bf83cb5491_002170c0c3ede830_20280166850829889674.jpg',
        title: 'Máy xông tinh dầu Humidifier H2O phun sương tạo độ ẩm trong nhà, phòng ngủ - Máy khuếch tán tinh dầu cao cấp',
        shop: 'https://shopee.vn/M%C3%A1y-x%C3%B4ng-tinh-d%E1%BA%A7u-Humidifier-H2O-phun-s%C6%B0%C6%A1ng-t%E1%BA%A1o-%C4%91%E1%BB%99-%E1%BA%A9m-trong-nh%C3%A0-ph%C3%B2ng-ng%E1%BB%A7-M%C3%A1y-khu%E1%BA%BFch-t%C3%A1n-tinh-d%E1%BA%A7u-cao-c%E1%BA%A5p-i.233167885.16823966739',
        price: '148.000',
        type: 'dientu',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/08/52c1337f029b6bb9_74a89b86ebc5ce3a_44396166522849879674.jpg',
        title: 'Ba Lô Dây Rút In Hoạ Tiết Hoạt Hình Demon Slayer Dành Cho Bé Trai Và Bé Gái',
        shop: 'https://shopee.vn/Ba-L%C3%B4-D%C3%A2y-R%C3%BAt-In-Ho%E1%BA%A1-Ti%E1%BA%BFt-Ho%E1%BA%A1t-H%C3%ACnh-Demon-Slayer-D%C3%A0nh-Cho-B%C3%A9-Trai-V%C3%A0-B%C3%A9-G%C3%A1i-i.876486749.10398187245',
        price: '145.000đ',
        type: 'dulich',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/08/83424ddd05169234_52478096e997bbaa_29638166522683249674.jpg',
        title: 'Balo Đi Học One Piece Mũ Rơm Cực HOT',
        shop: 'https://shopee.vn/D%E1%BB%8CN-KHO-X%E1%BA%A2-HOT-Balo-%C4%90i-H%E1%BB%8Dc-One-Piece-M%C5%A9-R%C6%A1m-C%E1%BB%B1c-HOT-i.444631719.13909846507',
        price: '76.220đ',
        type: 'dulich',
    },
    {
        src: 'https://s199.imacdn.com/vg/2022/10/08/4a74aaa55b1916ac_a261bdd3ea6edf5f_44456166522665669674.jpg',
        title: 'Ba Lô Học Sinh In Hình Hoạt Hình Demon Slayer Anhandise',
        shop: 'https://shopee.vn/Ba-L%C3%B4-H%E1%BB%8Dc-Sinh-In-H%C3%ACnh-Ho%E1%BA%A1t-H%C3%ACnh-Demon-Slayer-Anhandise-Phong-C%C3%A1ch-M%E1%BB%9Bi-Cho-Tr%E1%BA%BB-Em-Ch%E1%BB%91ng-Th%E1%BA%A5m-N%C6%B0%E1%BB%9Bc-Ch%E1%BB%91ng-M%C3%A0i-M%C3%B2n--i.869684725.20751810518',
        price: '382.205đ',
        type: 'dulich',
    },
    {
        src: 'https://cf.shopee.vn/file/04cf2ca3520a671d42e747d63c4e9c8e',
        title: '5 centimet trên giây',
        shop: 'https://shopee.vn/-M%C3%A3-LIFEMC11SA-10-%C4%91%C6%A1n-99K-S%C3%A1ch-5-centimet-tr%C3%AAn-gi%C3%A2y-i.374899645.13622751425',
        price: '48.000đ',
        type: 'truyen',
    },
    {
        src: 'https://salt.tikicdn.com/cache/750x750/ts/product/da/ac/38/d9c72609e4fbdb33632000be607c4d04.jpg.webp',
        title: 'Đứa Con Của Thời Tiết',
        shop: 'https://tiki.vn/dua-con-cua-thoi-tiet-ban-thuong-p76353063.html',
        price: '85.000đ',
        type: 'truyen',
    },
    {
        src: 'https://salt.tikicdn.com/cache/750x750/ts/product/94/9b/c4/6511d351f840ac17edc34f407e82ce54.jpg.webp',
        title: 'Thế Giới Otome Game Thật Khắc Nghiệt Với Nhân Vật Quần Chúng',
        shop: 'https://tiki.vn/the-gioi-otome-game-that-khac-nghiet-voi-nhan-vat-quan-chung-tap-4-p150997930.html',
        price: '172.500đ',
        type: 'truyen',
    },
];

const itemSideBar = [
    {
        title: 'Sách, truyện, ấn phẩm',
        type: 'truyen',
        color: '#f3384a',
    },
    {
        title: 'Mô hình, đồ chơi',
        type: 'mohinh',
        color: '#e91e63',
    },
    {
        title: 'Thiết bị điện tử',
        type: 'dientu',
        color: '#9c27b0',
    },
    {
        title: 'Trang phục, phụ kiện',
        type: 'trangphuc',
        color: '#673ab7',
    },
    {
        title: 'Du lịch, ẩm thực',
        type: 'dulich',
        color: '#3f51b5',
    },
    {
        title: 'Quà lưu niệm',
        type: 'qualuuniem',
        color: '#5b7dff',
    },
    {
        title: 'Sản phẩm khác',
        type: 'khac',
        color: '#009688',
    },
    {
        title: 'Tất cả sản phẩm',
        type: 'all',
        color: '#ff9800',
    },
];

function Shop() {
    const [items, setItems] = useState(itemsShop);
    const handleChangePage = async (page) => {};
    const handleClickSidebar = (type) => {
        if (type !== 'all') {
            setItems(itemsShop.filter((item) => item.type === type));
        } else {
            setItems(itemsShop);
        }
    };
    return (
        <Container className={cx('containner')}>
            <Row className={cx('row')}>
                <Col className={cx('column')} lg={9}>
                    <Row className={cx('row')}>
                        <Col className={cx('column')} lg={12}>
                            <span className={cx('title')}>Cửa hàng</span>
                        </Col>
                    </Row>
                    <Row className={cx('row')}>
                        {items.map((item, index) => {
                            return (
                                <Col key={index} className={cx('column')} lg={2} sm={4}>
                                    <ItemShop item={item} />
                                </Col>
                            );
                        })}
                    </Row>
                    <Row className={cx('row')}>
                        <Col className="d-flex justify-content-center" xs={12}>
                            <Pagination className={cx('pagination')}>
                                <Pagination.Item onClick={() => handleChangePage(1)} className={cx('pagination-item')}>
                                    {1}
                                </Pagination.Item>
                                <Pagination.Item onClick={() => handleChangePage(2)} className={cx('pagination-item')}>
                                    {2}
                                </Pagination.Item>
                                <Pagination.Item onClick={() => handleChangePage(3)} className={cx('pagination-item')}>
                                    {3}
                                </Pagination.Item>
                                <Pagination.Item onClick={() => handleChangePage(4)} className={cx('pagination-item')}>
                                    {4}
                                </Pagination.Item>
                                <Pagination.Item onClick={() => handleChangePage(5)} className={cx('pagination-item')}>
                                    {5}
                                </Pagination.Item>
                            </Pagination>
                        </Col>
                    </Row>
                </Col>
                <Col className={cx('column') + ' d-sm-none d-lg-block'} lg={3}>
                    <div className={cx('sidebar')}>
                        {itemSideBar.map((item, index) => {
                            return (
                                <div
                                    onClick={() => handleClickSidebar(item.type)}
                                    key={index}
                                    style={{ background: `${item.color}` }}
                                    className={cx('item-sidebar')}
                                >
                                    <span>{item.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Shop;
