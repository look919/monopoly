import { useMachine } from '@xstate/react';
import { DiceResult } from 'app/game/[id]/gameReducer/types';
import { createMachine } from 'xstate';

const gameMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGigEMBbMfEABy1gEsAXGrDcgD0QFoAmARgE4A6ABwAWAMwB2AKzoAnh1G9ByNCCKl+AYwCuAJx1gMdAAoAbQjLA7yVWgyasO3cdyFips+dwAM-ScvRqYJq6+oam5pb8OlgmJgAiNBp4SJTU9IzMKWwI7N6CHjmcnKL+qiRB2noGxmYWOpoAFoQYMAAyWBqEdpmgNun2WY5e+SByOYKCvqWBwVVhtZEYYADuAASwdF1gq9zWad3kdFgUjgBsLpzSICZgAGZ0jsWuElcARlh0R8SO3KL8l+gdDQoA0Hjk-iIXuhljQIHQGohuJwvOgGmBgaDEMIRtlck9Ie5RmcLn5lMggA */

  /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswDoDGBXATvmAHYAuACgDYoCeY+m+A9pZQCICW2cmspKxCCnwQASi0oBiACoB5AOLyAMgFEA2gAYAuolAAHJrA6kOTYrpAAPRAE4ANCBqIAtACYALBoC+Xh6gw4BERkVLT0mCQQsgBm0gTEMgrK6toWBkYmZhbWCDb2jrY+fuhYeIQkFNR0DMysnNywmKQAFhwibEy4AEaUYKSSKgBuFQAEAIyaOkgg6cam5tM5HhqYAKyr7gBsABwA7KsOTgjO7mM+viDETBBwFv5gaYZzWYsurhq7hy6rm5trRSB7oFyiEqvRHhl5tkXGNVvkjiddjYAUCysFKmEahJ6rdprNMgtQDlnGNSV9jgBmGxjf4XVFBCqhaqMbFcHh8ARCETiVgQ56EqwuTYU8nOCkadwokrA9FM8K1dhsxotNoQDrdXqkPkE6EIDyuUVjDQ2WnFAJoxlghjYZoCGBKJjYFA6vFPF1ExBjXafArHDzbU2A6UW0GYzBQJjSJgAKRQHEoAEFBCpBHF8AL8VDXggKZtDZsTaspeaGaHmZEYmmM26sx6-a5MK5VrttmMm6LtpK6dLiGBLBjqtra4Ljr9yUjaT4gA */

  /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswDoDGBXATvmAHYAuACgDYoCeY+mJEA8gGYAqBxAxO8wOL8AMgFEA2gAYAuolAAHAPawAlqWULiskAA9EATj0AaEDX0BfM8dQYcBImSq16mfAsqUAIsuxxMpABbK+BAeCrgARpRgpNwiAG4kpAAEAIySMkggiipqGlq6CABMACwSmACs5cUAbAAcAOzlxqYIALTFKRZW6Fh4hImOdAxQCuwKAFIoypQAgsQQIvOc+DzxianpWtmq6pqZBa21xc2I7eUpFV0g1r12A9RDLm6e3r6wpCjzKMEASs+xCTISUKm0y21ye1ABWK5UwAGZinDGic2kiyo0LJYQMQFBA4FoblslDs8vtTiVapgJPVailCk0TKdqgjLlibrZ+g4HvQiTldvlyRIytTafSUa0qvUruy+vYKNyGK53F4fPAwcSIQK2ilyoUqTS6QyWmc9KzujZZfcnIrniq3h8vr9nrySZCdKcUhJivrRUbTkjCtKehy5YNnEqXqq-IFgqEIlFSC7NWTtRI4Zg9IUUg0-aiJJTykGLXcudacP5PjAhApsChk-INfyU4U4SlxQGi7dOfKyyMxpNpnMFksuEmm1DECk4UZGW1Clmzddg5bS48mGxlm7weP3dq6Zh6QaxbOUnpip3MMQwNoe0Mx6SJ209PUUa2C5izEA */

  /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswDoDGBXATvmAHYAuACgDYoCeY+m+A9pZQCICW2cmpAFh3wQ2TXACNKYUgGIAogDcSpAAQBGANoAGALqJQAByawOpDk2J6QAD0QAmACybMAVmf2AbAA4A7M4A0IDSIALT2qgC+4QGoGDgERGRUtPSMLOxcPLCkKMQQKEIASmlyimTKtlq6SCCGxqbmljYI9s6YAMz2bb4BQQjBXU6+kdHoWHiESkl0DCQQAPIAZgAqBMQlSmqVlrUmZhbVTcGqne3u3qo+-oGIF-YukVEgxEwQcJYxYNtGuw0HIQ6eTCabyeVS2K69YLuDr3R4fOITRLUaZfOp7Rr-TROYGg8E9EJubzDEDw8YJCjIlLMVicbjwao7er7UCHVTOWxAkFgiEhFoATlhI1iZMmlIY1PSdMwWRyeUKaVRP2Z1hCqk0dxx3PxfS6tmJpPiouS4rStJ4-EEwlEEikiqZGL6aramD5tgu3WuOs0gOc+tGCPJUxS2D4ORgABkmNgUPaGd9Yyy7G1VNr+t49XD-SKkcbMFAmEsmAApFAcSgAQVyslyK3wysZ6L+CFUbT5qdsbsFJKzhpz00ws0Wtfr8cbicdzlUmHBXLxnrBGaFWGIYCsFONdrHKsdjm1bVszt9DyAA */

  /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswDoDGBXATvmAHYAuACgDYoCeY+m+A9pZQCICW2cmpAFh3wQ2TXACNKYUgGIAogDcSpAAQBGANoAGALqJQAByawOpDk2J6QAD0QAmACybMAVmf2AbAA4A7M4A0IDSIALT2qgC+4QGoGDgERGRUtPSMLOxcPLCkKMQQKEIASmlyimTKtlq6SCCGxqbmljYI9s6YAMz2bb4BQQjBXU6+kdHoWHiESkl0DCQQAPIAZgAqBMQlSmqVlrUmZhbVTcGqne3u3qo+-oGIF-YukVEgxEwQcJYxYNtGuw0HIQ6eTCabyeVS2K69YLuDr3R4fOITRLUaZfOp7Rr-TROYGg8E9EJubzDEDw8YJCjIlLMVicbjwao7er7UCHVTOWxAkFgiEhFoATlhI1iZMmlIY1PSdMwWRyeUKaVRP2Z1hCqk0dxx3PxfS6tmJpPiouS4rStJ4-EEwlEEikiqZGL6aramD5tgu3WuOs0gOc+tGCPJUxS2D4ORgABkmNgUPaGd9Yyy7G1VNr+t49XD-SKkcbMFAmEsmAApFAcSgAQVyslyK3wysZ6L+CFUbT5qdsbsFJKzhpz00ws0Wtfr8cbicdzlUmHBXLxnrBGaFWGIYCsFONdrHKsdjm1bVszt9DyAA */

  /** @xstate-layout N4IgpgJg5mDOIC5RQIYFswDoDGBXATvmAHYAuACgDYoCeY+m+A9pZQCICW2cmspK+UgGIAcgFEAGgBUA2gAYAuolAAHJrA6kOTYspAAPRACYAzAFZMATmvWzANgDsAFidyzADgA0IGohMn3TGdrBxM7OzknUzsAXxjvVAwcAiIyKlp6RhZ2Lh4+AWFxaRkARiUkEDUNLR09QwRTCxtbRxc3Lx8-SwdMIydrErkIpwCI2PiQRKw8QhIKajoGZlZOblhefmIIAQgAJWyheXLVdU1tXQr6u3cnTHcSozN7OzMjB0sPb18EE1de-ssdm6JiMJUsYTiCXQ0xSc3SiyyK1y61IAAsOPgIGwmLgAEaUMDCI56KpnWqXRDXW73R7PV7vT6dBAlJzXTAA9zuEGcqKWSGTaHJWZpBaZbColDEGAAGSY2BQNWIGwKokkskUJNOirqiHBgUsQzCZjacjcZi+iCcLPZNjsrie9jkfImUyFqXmGQY4slMrlCvOysEquKZU11XOOoQliM+sNLxNZotzJKDkCwVTZmsTqiRn5rpm7vhYolUrAsvlisDhTVMiMx0qWojFKjASsceNrlNTyT5iaNgckQ87jkbzzgoLcNFXpLvorAZUzBU9FINAAYhwwJQIFXg+r66Ttc2SuY7L1AZZXHZQe4HIzvsajFZrDeTE6TGC7WOkhORZ6cDOyz9SsFyYJdBDXDctx3IpZFDCoDybUB6mPewzyBS9r1vDpvlvOR-ksdwjEsFMbztBwvxhYUPQRb1S3Lf0dEwECwJXddN23fIgxg2t90bckkMQY9WTQi8hkwu9BJKMw8I5JwPDk8xOQot1Jz-WjZwYpVmOXCD2MwDhYDENAVBXaCaw1eC+IuATmQcUJMGuBwr2It8TGcJMHFBJ9ulvTzb2dKFv1hX8aIA+jgMXHS2KggyjJMmgzJDXjw34gxBLskwHNIojBnBNynCTRwShtbpCOPOQuRKdxlJ-ajix9QC50Y7TwOi7dYuM0yJVgABZHQwDXJh8HIAhvVgMBDgsk4UustLmSBSwstvJwbieUJ7iTQZ-BKm4RmjFknRq4K6unBrwvnSLWsg9rDM6hLur64gBtXIaRvwMasBUKc2DAbADPOAB5Yg3o+ybkrJWb6lBD5MDkVMHjkEE+mNBxNtfTLgi5G8pOkpyjqoosGAANxQSgOG2UgwAASQAM2xPECVIAB1FBYH2VhIESvcwwhyM+hMRaUzBU1UxBcJUaZY8wR2gWXFBEprnxwsp0wEmyYp6m6ZxfFCRZtnsk5zjqySnnDxs-nBYcYW4a5IxxbRuzvLsuxRjh6MldUhE1fJhVNfpnXmdZ9mCRu-3GbB03ELmwjNuk7yLytF85JvD2Qsyb2NdpsPdaDg2bpEJhSGzokpobGbI2jTbQh6GweWcBXWWql1x2OwnMCgJgpCYAApFAOEoCPLPL5t3AItsXYq1NPKdCXvhZNkOVtnkiNTk7MBICAAZpqQCGIIQpCpnqxF2Ykh955siLCO5cMUswwmPKuRiCfoaSGR0LziCZiCYCA4D0KZI6pXqAAWjeEmUBtxTRQOgdA9wZhV6E0AZDYwJRCqZWkqaGMzg7TXEzE4BBKtlg5DWEgyMQIkyPGKn0awLhiICyeAQv8RDVh5H4IIUhR4Uw9jkg5cILtoyZk5P4RhCJmHImVFsHYwcOE2WkrcAWhoqq-HCJmc0TJ-CLWocCcIkRogiMyGItYmA0QYixNrRmMi5pyMwAol2SjWQvA+D2boz9rCOEeFbe4dl9GnTokBKOCEgGICcsVA0V4bipjtEMVBTI7aBAwWaOQKYBEjB8f+M6-jGJG0sfUYci0wkxicJEy8MTvhhFPA8fo1w4HvGjHbNJ6lGqaSYpdVi10cmSXeCJUIbxRjYUtE8EqHwnKvHfAafBzcgoExVo086zVWm6Sgtks+Zs5oPDeN0kE61rhJieJlSp2N+imHcOMQKlFlZqTCpkrSCy2r6VgITcg6g4AaFSoE5BzIPAWBtsk+4J5Z6IGNJlDkoQ3wfngZM85nt6p+Kajc0CUVrr3LiiuDp81EZLWNKtMw61SmAq5N5E54RR4fDkg0q5cKWkIqunpDq8UqxooVsaTFK05I4oCHihAjhAhWjtEU0FOUIVnJUmnXxGkIrUrabS269KHr9UGsNUa3UwCMpeMVRyWK2W4qTAneOo875GBjAFAUUyLmhQyZSlqUqYoyq6qzR6z1XpKtZp9b6v1-o6CBiDZVjL3i3Hhv4EEUQWQFUlojR8AJxnAgVp+SFIq16zOuVSliiyboovuqzAupAxDf1wFAVEDqFXepdaqrpGrWVrQ5TqyIO1CLOXBB8clFrmlWtTfcgGaJ6CPOebAV5s13mRgVlJWGrIPhuWIuEUNc8pJ4VrsnBSQ4m2wuaWTJ65BbntJWVHZCCseiOStu8NyMYY5MitLcZoUSHQRGNfmVuMyKXNNgEuP6pM2qMqMHDBy9g3InJnuCOwPZUKRoHMnYcbwhUmqhaK1WpMfaUyzuYnO+sOYQDRYazymAhYGjMIMTkER+nMlMKEmwfRTQPAFqcyD8a24Z19ghhmSHg6GzYaQNDII8JYbcLh39BHjx23ZEytwkQpJOUo7e6Zf5aPwa1gxwOyGQ73OLmhzxmHsxDCBHbK0aNpa11lsGhWTdhW1Ro7BzOMmA56yY-nQuSmt1BIaAOHo9hHhhAvOYO2ai54-plujTkt40kdy7r3fuaK7L5LEhEk5JTNqsh6JGkYJyLwozSRvLeO98D9qsoOm8sNwSpiKVFoYj9bhaJc1bD9QxlJPX0CdNFr5hJuRw6EMIIxHDFfwgItyCNKufyAA */
  createMachine({
    id: 'game',
    initial: 'currentPlayer',
    states: {
      currentPlayer: {
        initial: 'rollDices',
        states: {
          rollDices: {
            initial: 'start',
            states: {
              start: {
                on: {
                  NEXT: [
                    { target: 'standardRoll', cond: 'ingameFunc' },
                    { target: 'thirdDoublet', cond: 'ingameFunc2' },
                  ],
                },
              },
              standardRoll: {
                on: {
                  '': '#game.currentPlayer.changeLocation',
                },
              },
              thirdDoublet: {
                on: {
                  '': '#game.currentPlayer.goToJail',
                },
              },
            },
          },
          changeLocation: {
            initial: 'start',
            states: {
              start: {
                on: {
                  NEXT: [
                    { target: 'linePropertyField', cond: 'ingameFunc' },
                    { target: 'propertyField', cond: 'ingameFunc2' },
                    { target: 'specialField', cond: 'ingameFunc3' },
                  ],
                },
              },
              propertyField: {
                initial: 'start',
                states: {
                  start: {
                    on: {
                      NEXT: [
                        { target: 'isPlayerPosession', cond: 'ingameFunc' },
                        { target: 'isEmpty', cond: 'ingameFunc2' },
                        { target: 'isOtherPlayerPosession', cond: 'ingameFunc3' },
                      ],
                    },
                  },
                  isPlayerPosession: {},
                  isEmpty: {
                    initial: 'start',
                    states: {
                      start: {
                        on: {
                          NEXT: [
                            { target: 'hasMoneyForPurchase', cond: 'ingameFunc' },
                            { target: 'hasNotEnoughMoneyForPurchase', cond: 'ingameFunc2' },
                          ],
                        },
                      },
                      hasMoneyForPurchase: {
                        states: {
                          playerDecisionOnPurchase: {
                            on: {
                              '': '#game.currentPlayer.validateIfDoubletWasRolled',
                            },
                          },
                        },
                        on: {
                          '': '#game.currentPlayer.changeLocation.propertyField.isEmpty.hasMoneyForPurchase.playerDecisionOnPurchase',
                        },
                      },
                      hasNotEnoughMoneyForPurchase: {},
                    },
                  },
                  isOtherPlayerPosession: {},
                },
              },
              linePropertyField: {},
              specialField: {},
            },
          },
          validateIfDoubletWasRolled: {
            initial: 'start',
            states: {
              start: {
                on: {
                  NEXT: [
                    { target: 'isDoublet', cond: 'ingameFunc' },
                    { target: 'isNotDoublet', cond: 'ingameFunc2' },
                  ],
                },
              },
              isDoublet: {
                on: {
                  '': '#game.currentPlayer.#game.currentPlayer.rollDices',
                },
              },
              isNotDoublet: {
                on: {
                  '': '#game.currentPlayer.endOfTurn',
                },
              },
            },
          },
          goToJail: {
            on: {
              '': '#game.currentPlayer.endOfTurn',
            },
          },
          endOfTurn: {
            on: {
              TIMER: '#game.nextPlayer',
            },
          },
        },
      },
      nextPlayer: {},
    },
  });

function ingameFunc() {
  return true;
}

const nextState = gameMachine.transition('goToJail', null);

export const Toggler = () => {
  const [state, send] = useMachine(gameMachine);

  return (
    <button onClick={() => send('TOGGLE')}>
      {state.value === 'inactive' ? 'Click to activate' : 'Active! Click to deactivate'}
    </button>
  );
};
