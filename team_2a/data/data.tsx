const dat = [
    {
        project: '新規Webサービス開発プロジェクト',
        content:
            '本プロジェクトでは、ユーザー向けに新たなWebサービスを企画からリリースまで一貫して開発します。UX/UIの観点から、直感的かつ使いやすいインターフェースを追求し、リリース後も継続的な改善を行います。フロントエンドからバックエンドまでの開発を担当し、モダンな技術スタックを採用して効率的な開発を実現します。さらに、ユーザーのフィードバックを積極的に収集し、サービスの向上を図ります。プロジェクト管理にはアジャイル手法を取り入れ、スプリント単位で進捗を確認しながら柔軟に対応していく予定です。',
        department: '開発部',
        language: ['JavaScript', 'TypeScript', 'React'],
        books: [
            'https://www.amazon.co.jp/%E3%80%8C%E6%8A%80%E8%A1%93%E6%9B%B8%E3%80%8D%E3%81%AE%E8%AA%AD%E6%9B%B8%E8%A1%93-%E9%81%94%E4%BA%BA%E3%81%8C%E6%95%99%E3%81%88%E3%82%8B%E9%81%B8%E3%81%B3%E6%96%B9%E3%83%BB%E8%AA%AD%E3%81%BF%E6%96%B9%E3%83%BB%E6%83%85%E5%A0%B1%E7%99%BA%E4%BF%A1-%E5%85%B1%E6%9C%89%E3%81%AE%E3%82%B3%E3%83%84%E3%81%A8%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-IPUSIRON/dp/4798171549/ref=sr_1_1_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=27N28C5T8C3ER&dib=eyJ2IjoiMSJ9.__rZ8fxg4QqFSlFWW-5C2Y6OT3Y2vBnuMW_og6SlD3D94jc9j83ZS5u8aP6ibhis2q9oSusgsS9QNuQFM3eOTRBpB45eWwXqW1rgmev95eJQ51N9j8LPKI4VH4ZuYpsWDpj-BJ-vjlfuiuSxoSzNol_T--uUgIVJdLUdgpO3Ljvsdh-iOhoHz_uq-BCkNG3T8DT30GOZYuUGPg00GtSg5ZvHude7ut3sXmWn7gFEl0Ak7cebroiHskw3aRf5K4GHnAELHJjULFfnpHvvLiLef4zuUPV87T8fEaWzJa-mSrE.61ICQ2Im7I9qoRW9X1pA0ejVZS4Wq-uJv3l67MFQAw0&dib_tag=se&keywords=%E6%8A%80%E8%A1%93%E6%9B%B8&qid=1725437835&sprefix=%E6%8A%80%E8%A1%93%E6%9B%B8%2Caps%2C144&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
            'https://www.amazon.co.jp/%E7%A7%81%E3%81%AF%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E3%81%97%E3%81%A6Linux%E3%82%AB%E3%83%BC%E3%83%8D%E3%83%AB%E3%82%92%E5%AD%A6%E3%82%93%E3%81%A0%E3%81%8B%E3%82%86%E3%81%9F%E3%81%8B%E3%81%95%E3%82%93%E3%81%AE%E6%8A%80%E8%A1%93%E6%9B%B8-%E5%B9%B3%E7%94%B0%E8%B1%8A-ebook/dp/B07VJKJY7M/ref=sr_1_6?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=27N28C5T8C3ER&dib=eyJ2IjoiMSJ9.__rZ8fxg4QqFSlFWW-5C2Y6OT3Y2vBnuMW_og6SlD3D94jc9j83ZS5u8aP6ibhis2q9oSusgsS9QNuQFM3eOTRBpB45eWwXqW1rgmev95eJQ51N9j8LPKI4VH4ZuYpsWDpj-BJ-vjlfuiuSxoSzNol_T--uUgIVJdLUdgpO3Ljvsdh-iOhoHz_uq-BCkNG3T8DT30GOZYuUGPg00GtSg5ZvHude7ut3sXmWn7gFEl0Ak7cebroiHskw3aRf5K4GHnAELHJjULFfnpHvvLiLef4zuUPV87T8fEaWzJa-mSrE.61ICQ2Im7I9qoRW9X1pA0ejVZS4Wq-uJv3l67MFQAw0&dib_tag=se&keywords=%E6%8A%80%E8%A1%93%E6%9B%B8&qid=1725437835&sprefix=%E6%8A%80%E8%A1%93%E6%9B%B8%2Caps%2C144&sr=8-6',
            'https://www.amazon.co.jp/%E3%81%93%E3%82%8C%E3%81%8B%E3%82%89%E3%81%AF%E3%81%98%E3%82%81%E3%82%8BReact%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AE%E5%9F%BA%E6%9C%AC%E3%81%8B%E3%82%89Next-js%E3%81%AB%E3%82%88%E3%82%8B%E3%82%A2%E3%83%97%E3%83%AA%E9%96%8B%E7%99%BA%E3%81%BE%E3%81%A7-%E5%B1%B1%E7%94%B0-%E7%A5%A5%E5%AF%9B/dp/4815619484/ref=sr_1_12_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=27N28C5T8C3ER&dib=eyJ2IjoiMSJ9.__rZ8fxg4QqFSlFWW-5C2Y6OT3Y2vBnuMW_og6SlD3D94jc9j83ZS5u8aP6ibhis2q9oSusgsS9QNuQFM3eOTRBpB45eWwXqW1rgmev95eJQ51N9j8LPKI4VH4ZuYpsWDpj-BJ-vjlfuiuSxoSzNol_T--uUgIVJdLUdgpO3Ljvsdh-iOhoHz_uq-BCkNG3T8DT30GOZYuUGPg00GtSg5ZvHude7ut3sXmWn7gFEl0Ak7cebroiHskw3aRf5K4GHnAELHJjULFfnpHvvLiLef4zuUPV87T8fEaWzJa-mSrE.61ICQ2Im7I9qoRW9X1pA0ejVZS4Wq-uJv3l67MFQAw0&dib_tag=se&keywords=%E6%8A%80%E8%A1%93%E6%9B%B8&qid=1725437835&sprefix=%E6%8A%80%E8%A1%93%E6%9B%B8%2Caps%2C144&sr=8-12-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1',
            'https://www.amazon.co.jp/Python%E3%81%A8Pygame%E3%81%A7%E4%BD%9C%E3%82%8B-%E3%83%AC%E3%83%88%E3%83%AD%E9%A2%A8RPG-%E5%85%A8%E3%82%B3%E3%83%BC%E3%83%89-%E3%82%8B%E3%81%A6%E3%82%93%E3%81%AE%E3%83%97%E3%83%81%E6%8A%80%E8%A1%93%E6%9B%B8-%E6%9F%B3%E4%BA%95-ebook/dp/B0DD1PSKWQ/ref=sr_1_32?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=27N28C5T8C3ER&dib=eyJ2IjoiMSJ9.__rZ8fxg4QqFSlFWW-5C2Y6OT3Y2vBnuMW_og6SlD3D94jc9j83ZS5u8aP6ibhis2q9oSusgsS9QNuQFM3eOTRBpB45eWwXqW1rgmev95eJQ51N9j8LPKI4VH4ZuYpsWDpj-BJ-vjlfuiuSxoSzNol_T--uUgIVJdLUdgpO3Ljvsdh-iOhoHz_uq-BCkNG3T8DT30GOZYuUGPg00GtSg5ZvHude7ut3sXmWn7gFEl0Ak7cebroiHskw3aRf5K4GHnAELHJjULFfnpHvvLiLef4zuUPV87T8fEaWzJa-mSrE.61ICQ2Im7I9qoRW9X1pA0ejVZS4Wq-uJv3l67MFQAw0&dib_tag=se&keywords=%E6%8A%80%E8%A1%93%E6%9B%B8&qid=1725437835&sprefix=%E6%8A%80%E8%A1%93%E6%9B%B8%2Caps%2C144&sr=8-32'
        ],
        tags: ['#アプリ開発', '#UXデザイン', '#リニューアル開発', '#プロジェクト管理']
    },
    {
        project: 'クラウド環境最適化プロジェクト',
        content:
            'クラウド環境の最適化を目指し、既存インフラの見直しを行います。コスト削減を第一の目標に、無駄なリソースの削除や適切なサーバーのスケーリングを行い、クラウド使用料金の削減を図ります。また、パフォーマンス面の向上にも注力し、応答速度の改善とシステムの可用性を高めるため、最新のクラウド技術や自動化ツールを積極的に採用します。さらに、データのバックアップやセキュリティ対策の強化も同時に行い、信頼性の高いインフラ環境を構築することを目指します。',
        department: 'インフラ部',
        language: ['Python', 'AWS'],
        books: [
            'https://www.amazon.co.jp/%E7%B5%B5%E3%81%A7%E8%A6%8B%E3%81%A6%E3%82%8F%E3%81%8B%E3%82%8B%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89%E3%82%A4%E3%83%B3%E3%83%95%E3%83%A9%E3%81%A8API%E3%81%AE%E4%BB%95%E7%B5%84%E3%81%BF-%E5%B9%B3%E5%B1%B1%E6%AF%85-ebook/dp/B01BLCJ97K/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2YK35J4ZPGH6D&dib=eyJ2IjoiMSJ9.lwusMdSPvYwt9DXLQsmQ7iU3XV68a31BHROvHy09AFvKMODAEYlLtxuKthgd1dbkvIgc-0b2iN4NLGCjDbmqXMKmitg4YNZ2lbs0_zaRa35QX-1iBI6vu2RDo7HALaWFjSwMG1s3KjRFodQ3aIs8sb1XNolop__uIchKYWyBLfZzFVnPlbvXbKa9w2nzCNZ9-9XNW3u1XVFP5DDFNGFBeuqeNlLITNdVnVTA4mfSC8-4IpTOgOGHwKbb_GkPPc82bRXPUPgdYmdu7dzOw7tvXf3GVXTBhmA2iPax8Qs03Jc.9CAbMpaQdC2c-ef58CJKJ7cQKQ-WSHFOjD0KLorX5sA&dib_tag=se&keywords=%E3%82%A4%E3%83%B3%E3%83%95%E3%83%A9+%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89+%E6%9C%AC&qid=1725496679&sprefix=%E3%82%A4%E3%83%B3%E3%83%95%E3%83%A9+%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89+%E6%9C%AC%2Caps%2C182&sr=8-1',
            'https://www.amazon.co.jp/Amazon-Web-Services%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E3%81%AE%E3%83%8D%E3%83%83%E3%83%88%E3%83%AF%E3%83%BC%E3%82%AF%EF%BC%86%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E6%A7%8B%E7%AF%89%E6%94%B9%E8%A8%82%EF%BC%94%E7%89%88-%E5%A4%A7%E6%BE%A4-%E6%96%87%E5%AD%9D/dp/4296202049/ref=sr_1_2?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2YK35J4ZPGH6D&dib=eyJ2IjoiMSJ9.lwusMdSPvYwt9DXLQsmQ7iU3XV68a31BHROvHy09AFvKMODAEYlLtxuKthgd1dbkvIgc-0b2iN4NLGCjDbmqXMKmitg4YNZ2lbs0_zaRa35QX-1iBI6vu2RDo7HALaWFjSwMG1s3KjRFodQ3aIs8sb1XNolop__uIchKYWyBLfZzFVnPlbvXbKa9w2nzCNZ9-9XNW3u1XVFP5DDFNGFBeuqeNlLITNdVnVTA4mfSC8-4IpTOgOGHwKbb_GkPPc82bRXPUPgdYmdu7dzOw7tvXf3GVXTBhmA2iPax8Qs03Jc.9CAbMpaQdC2c-ef58CJKJ7cQKQ-WSHFOjD0KLorX5sA&dib_tag=se&keywords=%E3%82%A4%E3%83%B3%E3%83%95%E3%83%A9+%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89+%E6%9C%AC&qid=1725496679&sprefix=%E3%82%A4%E3%83%B3%E3%83%95%E3%83%A9+%E3%82%AF%E3%83%A9%E3%82%A6%E3%83%89+%E6%9C%AC%2Caps%2C182&sr=8-2'
        ],
        tags: ['#クラウド最適化', '#コスト効率化', '#パフォーマンス向上', '#サーバー管理']
    },
    {
        project: '情報セキュリティ強化プロジェクト',
        content:
            '本プロジェクトでは、社内ネットワークや外部との通信におけるセキュリティ強化を目的とし、最新の脅威に対応できる体制を整備します。特に、サイバー攻撃の増加に対応するための防御策として、ファイアウォールやIDS/IPSの再設定、セキュリティパッチの適用など、システム全体のセキュリティレベルを引き上げます。加えて、従業員に対するセキュリティトレーニングを実施し、人為的ミスによる情報漏洩リスクを軽減するための教育も行います。日々進化する脅威に対して、迅速かつ効率的な対応を可能にするための運用体制の構築も同時に進めます。',
        department: 'セキュリティ部',
        language: ['C', 'Python'],
        books: [
            'https://www.amazon.co.jp/%E5%9B%B3%E8%A7%A3%E3%81%BE%E3%82%8B%E3%82%8F%E3%81%8B%E3%82%8A-%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3%E3%81%AE%E3%81%97%E3%81%8F%E3%81%BF-%E5%A2%97%E4%BA%95-%E6%95%8F%E5%85%8B/dp/4798157201/ref=sr_1_4_sspa?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=I01LXLMZN84A&dib=eyJ2IjoiMSJ9.kEUGTt24eadXARB_NS4JgVSfncZrXnOrIND82UuMjM0HEK5L2AMnq4eAyXpHhTCHIEz802_dTo_JmsJdriHRbnMk-IyAK5lnIihhLkZTDZiINCdQv6OCcXPrtTSwmLjqcXjnd0bbX_NVVYqkgw7bpOTuLq6ZuJNLTmzWC-3dDAky6S2sdisnxa2O4N7y4xRvAFb1LCzvN7Czp0E7jXKp58jT-OhQJO0kGuz-okAoMMKe5tXDqXTHH_XpkVI8uRqLRYiAyh7lsyVG2ARg8wmsMgIXavuid9Ggs_3wDMfij-k.2ZcScGNv6lxYN_51YJvEaz4GL2ZEPF1LN1FXcylZx-8&dib_tag=se&keywords=%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3+%E6%9C%AC&qid=1725496535&sprefix=%E3%82%BB%E3%82%AD%E3%83%A5%E3%83%AA%E3%83%86%E3%82%A3+%E6%9C%AC%2Caps%2C168&sr=8-4-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
        ],
        tags: ['#セキュリティ対策', '#パフォーマンス向上', '#技術研究', '#自動化ソリューション']
    },
    {
        project: 'デジタルマーケティング推進プロジェクト',
        content:
            'データに基づくマーケティング施策を強化するためのプロジェクトです。顧客データを分析し、ターゲット層の行動パターンや嗜好を把握した上で、効果的なプロモーション戦略を策定します。具体的には、SNSやWeb広告の最適化、メールマーケティングの自動化など、デジタルツールを活用した集客を行い、KPIの達成を目指します。また、分析結果を基にして、商品開発やサービスの改良に役立つインサイトを提供することも重要な役割です。最終的には、売上向上と顧客満足度の向上を目指し、社内外のリソースを連携させてマーケティング施策を推進していきます。',
        department: '企画部',
        language: ['SQL', 'JavaScript'],
        books: [],
        tags: ['#市場戦略', '#デジタルマーケティング', '#新技術導入', '#プロジェクト管理']
    },
    {
        project: 'AIアルゴリズム最適化プロジェクト',
        content:
            '本プロジェクトでは、ビッグデータを活用したAIモデルの精度向上を目指します。既存の機械学習モデルを改良し、予測精度やパフォーマンスを向上させることが主な目的です。特に、データクレンジングや特徴量エンジニアリングの段階から見直し、より信頼性の高いモデルを構築します。さらに、異常検知や需要予測など、実際の業務に直結するユースケースでAIを効果的に活用し、ビジネス成果に貢献します。プロジェクトの進捗状況は、定期的に報告し、必要に応じてチューニングを行うなど、常に最適な状態を維持するための運用体制も整えます。',
        department: 'データ分析部',
        language: ['Python', 'R'],
        books: [],
        tags: ['#データ分析', '#機械学習', '#次世代技術', '#パフォーマンス向上']
    }
]

export default function Data() {
    return dat
}
