import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:topjoy/controllers/home_view_controller.dart';
import 'package:topjoy/views/loading_view.dart';

class HomeView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    HomeViewController controller = Get.put(HomeViewController(context));
    return GetBuilder<HomeViewController>(
      init: controller,
      builder: (controller) {
        if (!controller.isInitialized) {
          return LoadingView();
        } else {
          return Scaffold(
            body: Container(
              child: Center(
                child: GestureDetector(
                  child: Stack(
                    children: [
                      Image.asset(
                        'images/bottlecap_${controller.bottlecapState}.png',
                        width: 300,
                        fit: BoxFit.cover,
                      ),
                      Container(
                        height: 300,
                        width: 300,
                        padding: EdgeInsets.all(55),
                        child: Center(
                          child: Text(
                            controller.giveMyMessage(),
                            textAlign: TextAlign.center,
                            style: GoogleFonts.manrope(
                              fontWeight: FontWeight.w800,
                              fontSize: 20,
                              color: Color.fromARGB(255, 46, 71, 47),
                            ),
                          ),
                        ),
                      )
                    ],
                  ),
                  onTap: () {
                    controller.flipTheBottlecap();
                  },
                ),
              ),
              width: double.infinity,
              height: double.infinity,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: AssetImage('images/background.jpg'),
                  fit: BoxFit.cover,
                ),
              ),
            ),
          );
        }
      },
    );
  }
}
