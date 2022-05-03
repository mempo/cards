/* eslint-disable */

import Inline from '../inline.macro'
import { Box, Flex, Paragraph, Link } from './scope'

const code = (
  <Inline>
    <>
      <Link
        href='https://cdn.workos.com/www/open-graph/main.css'
        rel='stylesheet'
      />
      <Flex
        sx={{
          alignItems: 'flex-end',
          backgroundImage: `url(${query.imageUrl})`,
          backgroundSize: 'cover',
          display: 'flex',
          width: '100%'
        }}
      >
        <Box
          sx={{
            background:
              'linear-gradient(180deg, rgba(3, 6, 39, 0) 0%, rgba(3, 6, 39, 1) 100%)',
            bottom: 0,
            position: 'absolute',
            height: 455,
            width: '100%'
          }}
        />
        <Flex
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 40
          }}
        >
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              zIndex: 1
            }}
          >
            <svg width='286' height='53' viewBox='0 0 429 80'>
              <path
                d='M53.3738 29.2693H58.4578L62.1183 44.3204C62.797 47.1612 62.9318 48.853 62.9318 48.853H63.0004C63.0004 48.853 63.2368 47.1967 63.9155 44.3204L67.4057 29.2693H73.1685L76.862 44.3204C77.5738 47.2627 77.7441 48.853 77.7441 48.853H77.8458C77.8458 48.853 77.9144 47.2627 78.5906 44.3204L82.1163 29.2693H87.2004L80.7614 53.9588H75.1004L71.2035 39.0092C70.39 35.7626 70.3214 34.3092 70.3214 34.3092H70.2528C70.2528 34.3092 70.1841 35.7626 69.4393 39.0092L65.7788 53.9588H59.95L53.3738 29.2693Z'
                fill='white'
              />
              <path
                d='M86.3517 44.9893C86.3517 39.3407 90.0121 35.6883 95.5385 35.6883C101.029 35.6883 104.69 39.3407 104.69 44.9893C104.69 50.6709 101.029 54.3588 95.5385 54.3588C90.0147 54.3563 86.3517 50.6709 86.3517 44.9893ZM99.9438 44.9893C99.9438 41.3369 98.1822 39.2722 95.5385 39.2722C92.6914 39.2722 91.0976 41.5728 91.0976 44.9893C91.0976 48.7102 92.8592 50.7723 95.5385 50.7723C98.3855 50.7723 99.9438 48.4718 99.9438 44.9893Z'
                fill='white'
              />
              <path
                d='M106.96 35.9652H111.467V39.2803H111.569C112.349 37.5555 114.212 35.8307 117.397 35.8307C117.939 35.8307 118.28 35.8992 118.516 35.9652V40.4622H118.381C118.381 40.4622 117.975 40.3278 116.856 40.3278C113.366 40.3278 111.467 42.3899 111.467 46.2453V53.956H106.96V35.9652Z'
                fill='white'
              />
              <path
                d='M120.618 29.2693H125.125V37.183C125.125 41.85 125.057 42.6946 125.057 42.6946H125.125L131.836 35.9655H137.462L129.602 43.7447L138.72 53.9588H133.397L126.821 46.517L125.125 48.1732V53.9563H120.618V29.2693Z'
                fill='white'
              />
              <path
                d='M138.786 41.7043C138.786 34.095 143.532 29.0222 150.649 29.0222C157.767 29.0222 162.513 34.095 162.513 41.7043C162.513 49.3135 157.767 54.3864 150.649 54.3864C143.532 54.3864 138.786 49.3135 138.786 41.7043ZM157.596 41.7043C157.596 36.53 154.818 33.045 150.647 33.045C146.475 33.045 143.699 36.53 143.699 41.7043C143.699 46.8786 146.478 50.3636 150.647 50.3636C154.816 50.3636 157.596 46.8786 157.596 41.7043Z'
                fill='white'
              />
              <path
                d='M164.238 45.7406H169.391C169.391 48.6499 171.392 50.2732 174.442 50.2732C177.017 50.2732 178.781 48.9872 178.781 47.161C178.781 45.0989 177.426 44.5561 173.12 43.7115C169.188 42.9328 165.019 41.6139 165.019 36.4726C165.019 32.1784 168.679 28.9318 174.272 28.9318C180.101 28.9318 183.695 31.9755 183.695 36.574H178.542C178.542 34.342 176.814 32.9546 174.272 32.9546C171.697 32.9546 170.103 34.205 170.103 36.0312C170.103 37.9589 171.221 38.7021 174.678 39.4123C179.796 40.4953 184 41.0686 184 46.7501C184 51.2523 180.068 54.296 174.272 54.296C168.374 54.296 164.238 50.8794 164.238 45.7406Z'
                fill='white'
              />
              <path
                d='M0 41.5C0 42.2673 0.202369 43.0347 0.593616 43.6943L7.69003 55.9578C8.41856 57.2097 9.52485 58.2328 10.901 58.6905C13.6127 59.5924 16.4189 58.4347 17.7545 56.1193L19.4679 53.1577L12.7088 41.5L19.8457 29.1558L21.5591 26.1942C22.0717 25.3058 22.7598 24.5788 23.5693 24H22.8272H12.5604C10.6311 24 8.85028 25.0231 7.8924 26.6923L0.593616 39.3058C0.202369 39.9654 0 40.7327 0 41.5Z'
                fill='white'
              />
              <path
                d='M40.4738 41.5C40.4738 40.7327 40.2714 39.9653 39.8801 39.3057L32.6893 26.8807C31.3536 24.5788 28.5475 23.4211 25.8357 24.3096C24.4596 24.7672 23.3533 25.7903 22.6248 27.0422L21.0058 29.8288L27.765 41.5L20.6281 53.8442L18.9147 56.8058C18.402 57.6808 17.714 58.4212 16.9045 59H17.6465H27.9134C29.8426 59 31.6235 57.9769 32.5814 56.3077L39.8801 43.6942C40.2714 43.0346 40.4738 42.2673 40.4738 41.5Z'
                fill='white'
              />
              <path
                d='M204.132 45.504H233.976V42.084H204.132V45.504ZM260.393 41.112C260.393 35.28 262.985 31.644 267.629 31.644C271.301 31.644 272.993 33.732 273.497 36.36H278.141C277.241 31.32 273.785 27.864 267.629 27.864C260.429 27.864 255.533 33.192 255.533 41.112C255.533 49.104 260.429 54.432 267.629 54.432C273.785 54.432 277.241 50.94 278.141 45.936H273.497C272.993 48.564 271.301 50.652 267.629 50.652C262.985 50.652 260.393 46.98 260.393 41.112ZM285.415 38.808V27.504H280.807V54H285.415V44.064C285.415 40.392 287.215 38.916 289.519 38.916C291.931 38.916 293.191 40.428 293.191 43.344V54H297.799V42.264C297.799 37.872 295.279 35.28 291.103 35.28C288.331 35.28 286.315 36.684 285.415 38.808ZM312.922 54H317.35C317.062 52.524 316.99 51.12 316.99 49.428V42.372C316.99 37.62 314.146 35.28 309.178 35.28C304.678 35.28 301.618 37.584 301.222 41.508H305.65C305.794 39.816 307.018 38.7 309.034 38.7C311.122 38.7 312.49 39.78 312.49 42.012V42.876L307.018 43.488C303.31 43.92 300.43 45.432 300.43 49.104C300.43 52.416 303.022 54.396 306.586 54.396C309.502 54.396 311.806 53.208 312.67 51.12C312.67 52.02 312.742 52.992 312.922 54ZM307.846 51.192C306.01 51.192 305.002 50.292 305.002 48.852C305.002 46.944 306.478 46.512 308.422 46.26L312.49 45.792V46.908C312.49 49.788 310.222 51.192 307.846 51.192ZM325.53 35.712H320.994V54H325.602V44.064C325.602 40.392 327.402 38.916 329.706 38.916C332.118 38.916 333.378 40.428 333.378 43.344V54H337.986V42.264C337.986 37.872 335.466 35.28 331.29 35.28C328.518 35.28 326.394 36.72 325.53 38.808V35.712ZM354.548 52.776C354.548 56.088 352.784 57.6 349.868 57.6C347.744 57.6 346.16 56.952 345.656 55.152H341.084C341.768 58.788 344.936 60.84 349.868 60.84C355.304 60.84 359.156 58.176 359.156 52.2V35.712H354.62V38.7C353.756 36.936 351.668 35.28 348.752 35.28C343.928 35.28 340.688 39.024 340.688 44.388C340.688 49.86 343.928 53.532 348.752 53.532C351.668 53.532 353.684 51.948 354.548 50.184V52.776ZM354.728 44.748C354.728 48.024 352.784 50.148 349.976 50.148C347.024 50.148 345.296 47.844 345.296 44.388C345.296 40.896 347.024 38.628 349.976 38.628C352.784 38.628 354.728 40.752 354.728 43.992V44.748ZM379.596 48.312H375.348C374.736 50.076 373.44 51.048 371.352 51.048C368.508 51.048 366.852 49.212 366.564 45.972H379.704V44.496C379.704 39.636 376.968 35.28 371.244 35.28C366.096 35.28 362.1 38.916 362.1 44.892C362.1 50.868 366.024 54.432 371.352 54.432C375.528 54.432 378.804 52.236 379.596 48.312ZM371.244 38.7C374.016 38.7 375.312 40.716 375.312 42.984H366.708C367.212 40.176 368.832 38.7 371.244 38.7ZM387.235 54V27.504H382.627V54H387.235ZM408.661 44.856C408.661 38.952 404.809 35.28 399.409 35.28C394.009 35.28 390.157 38.952 390.157 44.856C390.157 50.796 394.009 54.432 399.409 54.432C404.809 54.432 408.661 50.796 408.661 44.856ZM394.765 44.856C394.765 41.04 396.421 38.7 399.409 38.7C402.361 38.7 404.053 41.04 404.053 44.856C404.053 48.708 402.361 51.012 399.409 51.012C396.421 51.012 394.765 48.708 394.765 44.856ZM424.233 52.776C424.233 56.088 422.469 57.6 419.553 57.6C417.429 57.6 415.845 56.952 415.341 55.152H410.769C411.453 58.788 414.621 60.84 419.553 60.84C424.989 60.84 428.841 58.176 428.841 52.2V35.712H424.305V38.7C423.441 36.936 421.353 35.28 418.437 35.28C413.613 35.28 410.373 39.024 410.373 44.388C410.373 49.86 413.613 53.532 418.437 53.532C421.353 53.532 423.369 51.948 424.233 50.184V52.776ZM424.413 44.748C424.413 48.024 422.469 50.148 419.661 50.148C416.709 50.148 414.981 47.844 414.981 44.388C414.981 40.896 416.709 38.628 419.661 38.628C422.469 38.628 424.413 40.752 424.413 43.992V44.748Z'
                fill='white'
              />
            </svg>
          </Box>
          <Paragraph
            sx={{
              color: '#fff',
              fontSize: 32,
              fontFamily: 'Untitled Sans',
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: '-.04em',
              zIndex: 1
            }}
          >
            {query.title}
          </Paragraph>
        </Flex>
      </Flex>
    </>
  </Inline>
)

const query = {
  title: 'New Integration: Salesforce SAML',
  imageUrl:
    'https://assets-global.website-files.com/621f84dc15b5ed16dc85a18a/6259e231ff2ea968f0115282_salesforce.png'
}

export const workosChangelog = { name: 'WorkOS Changelog', code, query }
