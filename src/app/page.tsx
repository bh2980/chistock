import Chistock from "@assets/chistock.svg";

import Button from "@atoms/Button/Button";
import Divider from "@atoms/Divider/Divider";
import Icon from "@atoms/Icon/Icon";
import Stack from "@atoms/Stack/Stack";
import Text from "@atoms/Text/Text";
import Tile from "@atoms/Tile/Tile";

export default function Home() {
  return (
    <Stack
      itemAligns="center"
      justifyContent="center"
      gap={"m"}
      className="w-full min-h-screen bg-surface p-3xl"
    >
      <Stack gap="xs">
        <Tile
          height="h-[72px]"
          width="w-desktop-12"
          variant="primary"
          itemAligns="center"
          justifyContent="between"
          padding="m"
        >
          <Chistock />
          <input
            className="w-[320px] h-full outline-none bg-secondary-fixed rounded-m p-s"
            placeholder="검색"
          />
        </Tile>
        <Tile
          height="h-[32px]"
          width="w-desktop-12"
          variant="secondaryFixed"
          justifyContent="center"
          itemAligns="center"
          gap="l"
        >
          <Text color="onSecondaryFixed">APPL 2,595.55 ▼ -1.30%</Text>
          <Text color="onSecondaryFixed">TSLA 2,595.55 ▲ +1.30%</Text>
          <Text color="onSecondaryFixed">APPL 2,595.55 ▼ -1.30%</Text>
          <Text color="onSecondaryFixed">TSLA 2,595.55 ▲ +1.30%</Text>
          <Text color="onSecondaryFixed">APPL 2,595.55 ▼ -1.30%</Text>
        </Tile>
      </Stack>
      <Divider length="w-desktop-12" color="outlineVariant" thickness="s" />
      <Stack direction="row" className="w-desktop-12 flex gap-m">
        <Tile width="w-desktop-8" padding="2xl">
          <Stack gap="m">
            <Stack direction="row" justifyContent="between" className="w-full">
              <Text size="headline1" bold>
                S&P 500
              </Text>
              <Stack>
                <Text size="headline1" bold>
                  $ 4,148.37
                </Text>
                <Stack direction="row" gap="s" justifyContent="end">
                  <Text size="body2" bold>
                    ▲ +1.69
                  </Text>
                  <Text size="body2" bold>
                    ▲ 0.80%
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <div className="w-[623px] h-full bg-primary rounded-l" />
          </Stack>
        </Tile>
        <Stack gap="xs">
          <Tile width="w-desktop-4" className="flex justify-center">
            <Button variant="text" className="w-full" size="s">
              <Icon icon="chevron-up" />
            </Button>
          </Tile>
          <Tile width="w-desktop-4" padding="m" className="flex justify-between">
            <Stack>
              <Text size="headline3">S&P 500</Text>
              <Text size="headline2" bold>
                $ 4,148.37
              </Text>
              <Stack direction="row" gap="s">
                <Text size="body2">▲ +1.69</Text>
                <Text size="body2">▲ 0.80%</Text>
              </Stack>
            </Stack>
            <div className="w-[120px] h-full bg-primary rounded-m" />
          </Tile>
          <Tile width="w-desktop-4" padding="m" className="flex justify-between">
            <Stack>
              <Text size="headline3">S&P 500</Text>
              <Text size="headline2" bold>
                $ 4,148.37
              </Text>
              <Stack direction="row" gap="s">
                <Text size="body2">▲ +1.69</Text>
                <Text size="body2">▲ 0.80%</Text>
              </Stack>
            </Stack>
            <div className="w-[120px] h-full bg-primary rounded-m" />
          </Tile>
          <Tile width="w-desktop-4" padding="m" className="flex justify-between">
            <Stack>
              <Text size="headline3">S&P 500</Text>
              <Text size="headline2" bold>
                $ 4,148.37
              </Text>
              <Stack direction="row" gap="s">
                <Text size="body2">▲ +1.69</Text>
                <Text size="body2">▲ 0.80%</Text>
              </Stack>
            </Stack>
            <div className="w-[120px] h-full bg-primary rounded-m" />
          </Tile>
          <Tile width="w-desktop-4" padding="m" className="flex justify-between">
            <Stack>
              <Text size="headline3">S&P 500</Text>
              <Text size="headline2" bold>
                $ 4,148.37
              </Text>
              <Stack direction="row" gap="s">
                <Text size="body2">▲ +1.69</Text>
                <Text size="body2">▲ 0.80%</Text>
              </Stack>
            </Stack>
            <div className="w-[120px] h-full bg-primary rounded-m" />
          </Tile>
          <Tile width="w-desktop-4" className="flex justify-center">
            <Button variant="text" className="w-full" size="s">
              <Icon icon="chevron-down" />
            </Button>
          </Tile>
        </Stack>
      </Stack>
      <Divider length="w-desktop-12" color="outlineVariant" thickness="s" />
      <Tile width="w-desktop-12" padding="2xl">
        <Stack gap="s" className="w-full">
          <Stack direction="row" justifyContent="between" className="w-full">
            <Text size="headline2" bold>
              실시간 차트
            </Text>
            <Text size="body2" color="onSurfaceVariant">
              2023.07.13 07:13 기준
            </Text>
          </Stack>
          <div className="flex gap-m">
            <Text size="headline3" bold>
              거래량
            </Text>
            <Text size="headline3">상승률</Text>
            <Text size="headline3">하락률</Text>
          </div>
          <Stack direction="row">
            <Stack className="w-1/2" gap="m">
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="m">
                  <div>1</div>
                  <Stack direction="row" gap="m">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text>Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="bg-primary rounded-m w-[72px] h-full"></div>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body2" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="m">
                  <div>1</div>
                  <Stack direction="row" gap="m">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text>Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="bg-primary rounded-m w-[72px] h-full"></div>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body2" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="m">
                  <div>1</div>
                  <Stack direction="row" gap="m">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text>Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="bg-primary rounded-m w-[72px] h-full"></div>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body2" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="m">
                  <div>1</div>
                  <Stack direction="row" gap="m">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text>Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="bg-primary rounded-m w-[72px] h-full"></div>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body2" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="m">
                  <div>1</div>
                  <Stack direction="row" gap="m">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text>Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="bg-primary rounded-m w-[72px] h-full"></div>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body2" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
            </Stack>
            <Divider
              direction="vertical"
              length="h-full"
              thickness="s"
              color="outlineVariant"
              className="mx-2xl"
            />
            <Stack className="w-1/2" gap="m">
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="m">
                  <div>1</div>
                  <Stack direction="row" gap="m">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text>Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="bg-primary rounded-m w-[72px] h-full"></div>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body2" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="m">
                  <div>1</div>
                  <Stack direction="row" gap="m">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text>Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="bg-primary rounded-m w-[72px] h-full"></div>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body2" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="m">
                  <div>1</div>
                  <Stack direction="row" gap="m">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text>Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="bg-primary rounded-m w-[72px] h-full"></div>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body2" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="m">
                  <div>1</div>
                  <Stack direction="row" gap="m">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text>Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="bg-primary rounded-m w-[72px] h-full"></div>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body2" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Stack direction="row" justifyContent="between">
                <Stack direction="row" itemAligns="center" gap="m">
                  <div>1</div>
                  <Stack direction="row" gap="m">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text>Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <div className="bg-primary rounded-m w-[72px] h-full"></div>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body2" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Tile>
      <Stack direction="row" gap="m">
        <Tile width="w-desktop-4" padding="2xl">
          <Stack className="w-full" gap="m">
            <Text size="headline2" bold>
              최근 본 종목
            </Text>
            <Stack gap="m">
              <Stack
                direction="row"
                justifyContent="between"
                itemAligns="center"
                className="w-full"
              >
                <Stack direction="row" gap="m">
                  <Stack direction="row" gap="m" itemAligns="center">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text color="onSurfaceVariant">Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body1" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Divider length="w-full" thickness="s" color="outlineVariant" />
              <Stack
                direction="row"
                justifyContent="between"
                itemAligns="center"
                className="w-full"
              >
                <Stack direction="row" gap="m">
                  <Stack direction="row" gap="m" itemAligns="center">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text color="onSurfaceVariant">Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body1" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Divider length="w-full" thickness="s" color="outlineVariant" />
              <Stack
                direction="row"
                justifyContent="between"
                itemAligns="center"
                className="w-full"
              >
                <Stack direction="row" gap="m">
                  <Stack direction="row" gap="m" itemAligns="center">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text color="onSurfaceVariant">Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body1" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Divider length="w-full" thickness="s" color="outlineVariant" />
              <Stack
                direction="row"
                justifyContent="between"
                itemAligns="center"
                className="w-full"
              >
                <Stack direction="row" gap="m">
                  <Stack direction="row" gap="m" itemAligns="center">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text color="onSurfaceVariant">Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body1" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
              <Divider length="w-full" thickness="s" color="outlineVariant" />
              <Stack
                direction="row"
                justifyContent="between"
                itemAligns="center"
                className="w-full"
              >
                <Stack direction="row" gap="m">
                  <Stack direction="row" gap="m" itemAligns="center">
                    <div className="bg-primary rounded-circle w-[48px] h-[48px]"></div>
                    <Stack>
                      <Text size="headline3" bold>
                        APPL
                      </Text>
                      <Text color="onSurfaceVariant">Apple Inc</Text>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack itemAligns="end">
                  <Text size="headline3" bold>
                    $ 189.77
                  </Text>
                  <Text size="body1" bold>
                    +0.90%
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Tile>
        <Tile width="w-desktop-8" padding="2xl">
          <Stack gap="m">
            <Text size="headline2" bold>
              뉴스
            </Text>
            <Stack gap="m">
              <Stack direction="row" justifyContent="between">
                <Stack className="flex-1" gap="3xs">
                  <Stack direction="row" gap="xs">
                    <Text color="primary" size="body3" bold>
                      Business
                    </Text>
                    <Text color="onSurfaceVariant" size="body3">
                      Routre • 2일 전
                    </Text>
                  </Stack>
                  <Stack>
                    <Text bold color="onSurface">
                      ‘YOLO’ spenders are propping up the economy, says Wharton professor Jeremy
                      Siegel—but
                    </Text>
                    <Text color="onSurfaceVariant">
                      There is one catalyst that could shake the current slow-paced bull market into
                      a faster-paced, higher-octane type of rally, to the mo...
                    </Text>
                  </Stack>
                </Stack>
                <div className="w-[120px] h-[120px] bg-primary rounded-m"></div>
              </Stack>
              <Divider length="w-full" color="outlineVariant" thickness="s" />
              <Stack direction="row" justifyContent="between">
                <Stack className="flex-1" gap="3xs">
                  <Stack direction="row" gap="xs">
                    <Text color="primary" size="body3" bold>
                      Business
                    </Text>
                    <Text color="onSurfaceVariant" size="body3">
                      Routre • 2일 전
                    </Text>
                  </Stack>
                  <Stack>
                    <Text bold color="onSurface">
                      ‘YOLO’ spenders are propping up the economy, says Wharton professor Jeremy
                      Siegel—but
                    </Text>
                    <Text color="onSurfaceVariant">
                      There is one catalyst that could shake the current slow-paced bull market into
                      a faster-paced, higher-octane type of rally, to the mo...
                    </Text>
                  </Stack>
                </Stack>
                <div className="w-[120px] h-[120px] bg-primary rounded-m"></div>
              </Stack>
              <Divider length="w-full" color="outlineVariant" thickness="s" />
              <Stack direction="row" justifyContent="between">
                <Stack className="flex-1" gap="3xs">
                  <Stack direction="row" gap="xs">
                    <Text color="primary" size="body3" bold>
                      Business
                    </Text>
                    <Text color="onSurfaceVariant" size="body3">
                      Routre • 2일 전
                    </Text>
                  </Stack>
                  <Stack>
                    <Text bold color="onSurface">
                      ‘YOLO’ spenders are propping up the economy, says Wharton professor Jeremy
                      Siegel—but
                    </Text>
                    <Text color="onSurfaceVariant">
                      There is one catalyst that could shake the current slow-paced bull market into
                      a faster-paced, higher-octane type of rally, to the mo...
                    </Text>
                  </Stack>
                </Stack>
                <div className="w-[120px] h-[120px] bg-primary rounded-m"></div>
              </Stack>
            </Stack>
          </Stack>
        </Tile>
      </Stack>
    </Stack>
  );
}
