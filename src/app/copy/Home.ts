export const homeCopy = {
    header: {
        slogan: "SECURE. SIMPLE.<br/> <span class='ps-5'>COMPLETELY IN</span> <br/> <span class='gradient-text'>YOUR</span> CONTROL.",
        subSlogan: "Introducing <strong class='monserrat-semibold gradient-text'>Vultisig</strong> : <br> A highly secure self-custodial multi-chain crypto vault with in-built two-factor authentication, and no tracking or registration requirements.",
        downloadTitle: "Now Available for iOS, Mac and Android:"
    },
    segment1: {
        mainTitle: "PROBLEMS",
        subTitle: "WHAT IS WRONG WITH <br>WALLETS",
        items: [
            {
                title: "Single-signature wallets are dangerous",
                description: "Accidentally lose your phone? Upload your private keys to a phishing site? Download a trojan and drain your metamask? Forget your backup phrase? Get your iCloud hacked? <strong class='monserrat-bold'>One mistake and forever rekt.</strong>"
            },
            {
                title: "Hardware wallets are clunky",
                description: "Small screens, small buttons, annoying interfaces. Complicated setup instructions, scary firmware updates and confusing transactions. <br> <strong class='monserrat-bold'>Why can’t it be better.</strong>"
            },
            {
                title: "Multi-sig wallets are painful",
                description: "Lose one key, lose it all. Multi-sig is the solution, but does not work natively. Different networks (ETH, BTC, SOL) have different multi-sig setups, making a single UX impossible. <strong class='monserrat-bold'>If only there was something that works.</strong>"
            }
        ]
    },
    segment2: {
        mainTitle: "THE <span class='gradient-text'>SOLUTION</span> ",
        subTitle: "Vultisig is the next evolution in crypto vaults",
        items: [
            {
                title: "Rich hardware",
                description: "Forget special hardware - use your current phone as a co-signer device! <br/> Large screens, excellent user experience - easily verify transactions. Camera, bluetooth, wifi, cellular, USBC, secure enclaves, biometrics - all there. ",
                img:"./img/rich-hardware.svg"
            },
            {
                title: "Familiar hardware",
                description: "Everyone has a phone, laptop or tablet. They are fast and powerful. They have full encryption and security. They don’t look like crypto wallets! You don’t need anything else. ",
                img:"./img/familiar-hardware.svg"

            },
            {
                title: "Threshold Signatures",
                description: "Threshold signatures are the magic. The private key never exits. Vault-shares never hold funds. No single key is vulnerable. No seed phrases. And native to all crypto networks. ",
                img:"./img/threshold.svg"

            }
        ]
    },
    segment3: {
        mainTitle: "USER EXPERIENCE",
        subTitle: "SEAMLESS SECURITY",
        items: [
            {
                title: "Vault Generation",
                description: "KeyGen time: <strong class='monserrat-bold'>10 - 60 seconds.</strong> <br> 2of2, 2of3, or 3of4 - choose your vault type. Key generation is fast. No device holds the vault private key."
            },
            {
                title: "Transaction Signing",
                description: "KeySign time: <strong class='monserrat-bold'>5 - 10 seconds.</strong><br> One device starts the transaction. A second paired device confirms the transaction. It is natively “two-factor” and must be done in-person."
            },
            {
                title: "Resharing",
                description: "Reshare Time: <strong class='monserrat-bold'>10 - 60 seconds.</strong> <br> Lost a device? Replace it easily without changing the vault. Want to increase security? Go from 2of3 to 3of4 easily."
            }
        ]
    },
    segment4: {
        mainTitle: "OTHER <span class='gradient-text'>FEATURES</span> ",
        items: [
            {
                title: "Full DeFi",
                description: "Swaps, Bridging, DeFi - right from your Vault.",
                image: "./img/full-defi.svg",
                alt: "Full Defi"
            },
            {
                title: "Remote Signing",
                description: "Sign with a remote co-signer. All messages are encrypted between devices and can never be intercepted.",
                image: "./img/remote-sign.svg",
                alt: "Remote Signing"
            },
            {
                title: "Transaction Policies",
                description: "Nominate transaction policies for your vault - spend limits, address whitelists and more. <br/>(COMING SOON)",
                image: "./img/tx-policies.svg",
                alt: "Transaction Policies"
            }
        ]
    },
    segment5: {
        mainTitle: "WHO IS <span class='gradient-text'>VULTISIG </span>FOR ",
        items: [
            {
                title: "WHALES",
                description: "If you have more than $100k in crypto, you MUST consider upgrading to a TSS vault. Your funds are at-risk on all other wallets. Download it now. ",
                image: "./img/whales.svg",
                alt: ""
            },
            {
                title: "FUNDS",
                description: "Vultisig is the open-source audited alternative to your current “custodian”. You know it’s time to switch to self-custody. Remote co-signing means you can access funds anywhere in the world.",
                image: "./img/funds.svg",
                alt: ""
            },
            {
                title: "TREASURIES",
                description: "TSS is natively compatible to all chains. Together with transaction policies, designate your leads the ability to pay staff with limits, whitelists and more.",
                image: "./img/treasuries.svg",
                alt: ""
            }
        ]
    },
    store: {
        title: "SECURE YOUR DIGITAL <br> ASSETS NOW",
        appStoreLink: {
            image: "./img/appstore.svg",
            alt: "Download on AppStore",
            url: "https://testflight.apple.com/join/kpVufItl",
            traget: "_blank"
        },
        githubLink: {
            image: "./img/github-download.svg",
            alt: "Download on Github",
            url: "https://github.com/vultisig/vultisig-ios/releases",
            target: "_blank"
        },
        playStoreLink: {
            image: "./img/playstore.svg",
            alt: "Download on PlayStore",
            url: "https://play.google.com/store/apps/details?id=com.vultisig.wallet",
            target: "_blank"
        }
    }
}
